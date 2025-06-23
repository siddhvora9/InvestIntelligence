#!/bin/bash

# InvestIntelligence Domain Configuration Script for Amazon Linux
# Run this after the main deployment script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Check if domain is provided
if [ -z "$1" ]; then
    print_error "Please provide your domain name as an argument"
    print_error "Usage: ./configure-domain.sh your-domain.com"
    exit 1
fi

DOMAIN="$1"
APP_DIR="/home/$(whoami)/InvestIntelligence"

print_status "Configuring domain: $DOMAIN"

# Update nginx configuration with domain
print_status "Updating Nginx configuration..."
sudo tee /etc/nginx/conf.d/investintelligence.conf > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

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

# Test and reload nginx
if sudo nginx -t; then
    sudo systemctl reload nginx
    print_success "Nginx configuration updated"
else
    print_error "Nginx configuration test failed"
    exit 1
fi

# Install Certbot if not already installed
if ! command -v certbot >/dev/null 2>&1; then
    print_status "Installing Certbot..."
    sudo yum update -y
    sudo yum install -y certbot python3-certbot-nginx
    print_success "Certbot installed"
else
    print_status "Certbot already installed"
fi

# Get SSL certificate
print_status "Obtaining SSL certificate..."
if sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN; then
    print_success "SSL certificate obtained successfully"
else
    print_warning "SSL certificate could not be obtained automatically"
    print_warning "You may need to:"
    echo "1. Ensure your domain DNS is pointing to this server"
    echo "2. Wait for DNS propagation (can take up to 24 hours)"
    echo "3. Run manually: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
fi

# Update environment file with domain
print_status "Updating environment configuration..."
if [ -f "$APP_DIR/.env" ]; then
    sed -i "s|CORS_ORIGIN=https://your-domain.com|CORS_ORIGIN=https://$DOMAIN|g" "$APP_DIR/.env"
    print_success "Environment file updated with domain"
else
    print_warning "Environment file not found at $APP_DIR/.env"
fi

# Restart application
print_status "Restarting application..."
cd "$APP_DIR"
pm2 restart investintelligence

print_success "Domain configuration completed!"
print_status "Your application should now be accessible at:"
echo "  http://$DOMAIN"
echo "  https://$DOMAIN (if SSL certificate was obtained)"
echo "  http://www.$DOMAIN"
echo "  https://www.$DOMAIN (if SSL certificate was obtained)"

print_warning "If SSL certificate was not obtained, please:"
echo "1. Ensure your domain DNS is pointing to this server's IP"
echo "2. Wait for DNS propagation"
echo "3. Run: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN" 