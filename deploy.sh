#!/bin/bash

# InvestIntelligence EC2 Deployment Script
# This script safely deploys the application without breaking existing installations

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if service is running
service_running() {
    systemctl is-active --quiet "$1"
}

# Function to backup existing configuration
backup_config() {
    local file="$1"
    if [ -f "$file" ]; then
        cp "$file" "${file}.backup.$(date +%Y%m%d_%H%M%S)"
        print_status "Backed up $file"
    fi
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_error "Please don't run this script as root. Use a regular user with sudo privileges."
    exit 1
fi

print_status "Starting InvestIntelligence deployment..."

# Update system packages
print_status "Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install essential packages
print_status "Installing essential packages..."
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Node.js if not already installed
if ! command_exists node; then
    print_status "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    print_success "Node.js installed successfully"
else
    NODE_VERSION=$(node --version)
    print_status "Node.js already installed: $NODE_VERSION"
fi

# Install npm if not already installed
if ! command_exists npm; then
    print_status "Installing npm..."
    sudo apt-get install -y npm
    print_success "npm installed successfully"
else
    NPM_VERSION=$(npm --version)
    print_status "npm already installed: $NPM_VERSION"
fi

# Install PM2 globally if not already installed
if ! command_exists pm2; then
    print_status "Installing PM2..."
    sudo npm install -g pm2
    print_success "PM2 installed successfully"
else
    print_status "PM2 already installed"
fi

# Install Nginx if not already installed
if ! command_exists nginx; then
    print_status "Installing Nginx..."
    sudo apt install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    print_success "Nginx installed and started"
else
    print_status "Nginx already installed"
fi

# Create application directory
APP_DIR="/home/$(whoami)/InvestIntelligence"
print_status "Setting up application directory: $APP_DIR"

if [ -d "$APP_DIR" ]; then
    print_warning "Application directory already exists. Creating backup..."
    mv "$APP_DIR" "${APP_DIR}.backup.$(date +%Y%m%d_%H%M%S)"
fi

mkdir -p "$APP_DIR"
cd "$APP_DIR"

# Clone repository (you'll need to replace with your actual repo URL)
print_status "Cloning repository..."
if [ -z "$1" ]; then
    print_error "Please provide your GitHub repository URL as an argument"
    print_error "Usage: ./deploy.sh <your-github-repo-url>"
    exit 1
fi

REPO_URL="$1"
git clone "$REPO_URL" .

# Install dependencies
print_status "Installing dependencies..."
npm install

print_status "Installing server dependencies..."
cd server && npm install && cd ..

# Create environment file
print_status "Creating environment configuration..."
cat > .env << EOF
# MongoDB Atlas Connection String
# Replace with your actual MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/investintelligence?retryWrites=true&w=majority

# Server Configuration
PORT=5000
NODE_ENV=production

# CORS Configuration
CORS_ORIGIN=https://your-domain.com

# JWT Secret (for future use)
JWT_SECRET=your-secret-key-change-this-in-production
EOF

print_warning "Please edit .env file with your actual MongoDB Atlas connection string and domain"

# Build frontend
print_status "Building frontend..."
npm run build

# Create PM2 ecosystem file
print_status "Creating PM2 configuration..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'investintelligence',
    script: './server/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    env_file: '.env'
  }]
};
EOF

# Start application with PM2
print_status "Starting application with PM2..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Configure Nginx
print_status "Configuring Nginx..."

# Backup existing nginx config
backup_config "/etc/nginx/sites-available/default"

# Create nginx configuration
sudo tee /etc/nginx/sites-available/investintelligence > /dev/null << EOF
server {
    listen 80;
    server_name _;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Frontend static files
    location / {
        root $APP_DIR/dist/public;
        try_files \$uri \$uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 86400;
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/investintelligence /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
if sudo nginx -t; then
    sudo systemctl restart nginx
    print_success "Nginx configuration applied successfully"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Configure firewall
print_status "Configuring firewall..."
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Create deployment info file
cat > deployment-info.txt << EOF
InvestIntelligence Deployment Information
========================================

Deployment Date: $(date)
Application Directory: $APP_DIR
PM2 Process: investintelligence
Nginx Site: investintelligence

Next Steps:
1. Edit .env file with your MongoDB Atlas connection string
2. Update nginx configuration with your domain name
3. Set up SSL certificate with Let's Encrypt
4. Configure Route 53 DNS

Useful Commands:
- View logs: pm2 logs investintelligence
- Restart app: pm2 restart investintelligence
- View nginx logs: sudo tail -f /var/log/nginx/error.log
- Check status: pm2 status

MongoDB Atlas Setup:
1. Create cluster in MongoDB Atlas
2. Get connection string
3. Add EC2 IP to Atlas whitelist
4. Update MONGODB_URI in .env file

SSL Certificate:
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
EOF

print_success "Deployment completed successfully!"
print_status "Application is running on http://$(curl -s ifconfig.me)"
print_warning "Please complete the following steps:"
echo "1. Edit .env file with your MongoDB Atlas connection string"
echo "2. Update nginx configuration with your domain name"
echo "3. Set up SSL certificate"
echo "4. Configure Route 53 DNS"

print_status "Deployment information saved to: deployment-info.txt"
print_status "PM2 status:"
pm2 status 