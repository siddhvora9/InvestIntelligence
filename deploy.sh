#!/bin/bash

# InvestIntelligence EC2 Deployment Script for Amazon Linux
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

print_status "Starting InvestIntelligence deployment on Amazon Linux..."

# Update system packages
print_status "Updating system packages..."
sudo yum update -y

# Install essential packages
print_status "Installing essential packages..."
sudo yum install -y curl wget git unzip

# Install Node.js if not already installed
if ! command_exists node; then
    print_status "Installing Node.js..."
    # Install NodeSource repository
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
    print_success "Node.js installed successfully"
else
    NODE_VERSION=$(node --version)
    print_status "Node.js already installed: $NODE_VERSION"
fi

# Install npm if not already installed
if ! command_exists npm; then
    print_status "Installing npm..."
    sudo yum install -y npm
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
    # Install EPEL repository for nginx
    sudo yum install -y epel-release
    sudo yum install -y nginx
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

# Environment Variables
echo "Setting up environment variables..."

# Create .env file for the server
cat > server/.env << EOF
# Server Configuration
PORT=3000
NODE_ENV=production

# Database Configuration
MONGODB_URI=your_mongodb_connection_string_here

# CORS Configuration
CORS_ORIGIN=https://yourdomain.com

# Session Secret
SESSION_SECRET=your-session-secret-change-this-in-production
EOF

echo "Environment variables configured."

# Build frontend
print_status "Building frontend..."
npm run build

# Create PM2 ecosystem file
print_status "Creating PM2 configuration..."
cat > ecosystem.config.cjs << EOF
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
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup

# Configure Nginx
print_status "Configuring Nginx..."

# Backup existing nginx config
backup_config "/etc/nginx/nginx.conf"

# Create nginx configuration
sudo tee /etc/nginx/conf.d/investintelligence.conf > /dev/null << EOF
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

# Test nginx configuration
if sudo nginx -t; then
    sudo systemctl restart nginx
    print_success "Nginx configuration applied successfully"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Configure firewall (Amazon Linux uses iptables/security groups)
print_status "Configuring firewall..."
# Note: On AWS EC2, you should configure security groups instead
# This is just for local firewall rules
sudo yum install -y iptables-services
sudo systemctl enable iptables
sudo systemctl start iptables

# Allow HTTP and HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo service iptables save

print_warning "Remember to configure AWS Security Groups to allow HTTP (80), HTTPS (443), and SSH (22)"

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
5. Configure AWS Security Groups

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
sudo yum install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

AWS Security Groups:
- Allow HTTP (80)
- Allow HTTPS (443)
- Allow SSH (22)
EOF

print_success "Deployment completed successfully!"
print_status "Application is running on http://$(curl -s ifconfig.me)"
print_warning "Please complete the following steps:"
echo "1. Edit .env file with your MongoDB Atlas connection string"
echo "2. Update nginx configuration with your domain name"
echo "3. Set up SSL certificate"
echo "4. Configure Route 53 DNS"
echo "5. Configure AWS Security Groups"

print_status "Deployment information saved to: deployment-info.txt"
print_status "PM2 status:"
pm2 status 