module.exports = {
  apps: [{
    name: 'investintelligence-server',
    script: './server/index.js',
    cwd: '/home/ubuntu/InvestIntelligence',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}; 