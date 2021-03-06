module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [],
  
    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy : {
      production : {
        user : 'deploy',
        host : 'alexdana.me',
        ref  : 'origin/master',
        repo : 'git@github.com:misteralex95/react-360-test.git',
        path : '/home/deploy/react-360-test',
        'post-deploy' : '. ~/.bashrc && npm install && pm2 reload ecosystem.config.js --env production && npm run bundle && cp -r ./static_assets ./build/',
        env  : {
          NODE_ENV: 'production',
        }
      },
      staging : {
        user : 'deploy',
        host : 'alexdana.me',
        ref  : 'origin/develop',
        repo : 'https://github.com/MisterAlex95/react-360-test.git',
        path : '/home/deploy/react-360-test',
        'post-deploy' : '. ~/.bashrc && npm install && pm2 reload ecosystem.config.js --env staging && npm run bundle && cp -r ./static_assets ./build/',
        env  : {
          NODE_ENV: 'development',
        }
      }
    }
  };