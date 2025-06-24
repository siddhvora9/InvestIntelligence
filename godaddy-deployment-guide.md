# GoDaddy Deployment Guide for InvestIntelligence

## Prerequisites
- GoDaddy VPS or Dedicated Hosting plan with Node.js support
- Domain name configured
- SSH access to your server

## 1. Database Setup

### Option A: MongoDB Atlas (Recommended for current MongoDB setup)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier available)
3. Create database user
4. Get connection string
5. Add your IP to whitelist

### Option B: PostgreSQL (Recommended for current Drizzle setup)
1. **Neon** (Recommended):
   - Sign up at [neon.tech](https://neon.tech)
   - Create new project
   - Get connection string

2. **Supabase**:
   - Sign up at [supabase.com](https://supabase.com)
   - Create new project
   - Get connection string

## 2. Environment Configuration

Create `.env` file in your project root:

```env
# Database Configuration
# For MongoDB Atlas
MONGODB_URI=your_mongodb_connection_string_here

# For PostgreSQL (Neon/Supabase)
DATABASE_URL=postgresql://username:password@host:port/database_name

# Server Configuration
PORT=3000
NODE_ENV=production

# CORS Configuration
CORS_ORIGIN=https://yourdomain.com

# Session Secret
SESSION_SECRET=your-super-secret-session-key-here
```

## 3. Backend Configuration Changes

### Update CORS settings in server/index.js:
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://yourdomain.com',
  credentials: true
}));
```

### Update client API configuration:
In `client/src/services/api.ts`, update the base URL:
```typescript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://yourdomain.com/api' 
  : 'http://localhost:5000/api';
```

## 4. Build Configuration

### Update package.json scripts:
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "db:push": "drizzle-kit push"
  }
}
```

## 5. Server Deployment Steps

### Step 1: Upload Files
1. Build your project locally: `npm run build`
2. Upload the `dist` folder and `package.json` to your GoDaddy server
3. Upload the `client/dist` folder to your web root directory

### Step 2: Install Dependencies
```bash
npm install --production
```

### Step 3: Set Environment Variables
Create `.env` file on your server with the configuration above.

### Step 4: Run Database Migrations
```bash
npm run db:push
```

### Step 5: Start the Server
```bash
npm start
```

## 6. Process Management

### Using PM2 (Recommended):
```bash
# Install PM2
npm install -g pm2

# Start your application
pm2 start dist/index.js --name "investintelligence"

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
```

## 7. Web Server Configuration

### Apache Configuration (.htaccess):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Proxy API requests to Node.js server
RewriteRule ^api/(.*)$ http://localhost:3000/api/$1 [P,L]
```

### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/client/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 8. SSL Certificate

1. Enable SSL in GoDaddy cPanel
2. Or use Let's Encrypt for free SSL certificates

## 9. Monitoring & Maintenance

### Log Management:
```bash
# View PM2 logs
pm2 logs investintelligence

# Monitor application
pm2 monit
```

### Backup Strategy:
- Regular database backups
- Code repository backups
- Environment configuration backups

## 10. Performance Optimization

### Enable Compression:
```javascript
const compression = require('compression');
app.use(compression());
```

### Static File Caching:
```javascript
app.use(express.static('client/dist', {
  maxAge: '1y',
  etag: true
}));
```

## Troubleshooting

### Common Issues:
1. **Port conflicts**: Ensure port 3000 is available
2. **Database connection**: Check connection strings and network access
3. **CORS errors**: Verify CORS_ORIGIN setting
4. **File permissions**: Ensure proper read/write permissions

### Useful Commands:
```bash
# Check server status
pm2 status

# Restart application
pm2 restart investintelligence

# View real-time logs
pm2 logs investintelligence --lines 100
```

## Cost Estimation

### Monthly Costs:
- GoDaddy VPS: $20-50/month
- MongoDB Atlas: Free tier available
- Neon PostgreSQL: Free tier available
- Domain: $10-15/year

### Total: ~$20-65/month depending on hosting plan and database choice 