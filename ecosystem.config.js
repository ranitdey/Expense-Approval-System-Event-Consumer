module.exports = {
  apps : [{
    name: 'cashcog-consumer',
    script: './src/consumer.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      MONGO_URL:'', //Place your mongo connection string here
      EVENT_PRODUCER_URL : "https://cashcog.xcnt.io/stream"

    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
