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
    //   production : {
    //     user : 'deploy',
    //     host : 'lts1.milky.fr',
    //     ref  : 'origin/master',
    //     repo : 'git@github.com:misteralex95/react-360-test.git',
    //     path : '/home/deploy/react-360-test',
    //     'post-deploy' : 'source ~/.bashrc && yarn install && yarn run build',
    //     env  : {
    //       NODE_ENV: 'production',
    //     }
    //   },
      staging : {
        user : 'deploy',
        host : 'dev.milky.fr',
        ref  : 'origin/develop',
        repo : 'https://github.com/MisterAlex95/react-360-test.git',
        path : '/home/deploy/react-360-test',
        'post-deploy' : '. ~/.bashrc && yarn install && pm2 reload ecosystem.config.js --env staging && yarn run bundle',
        env  : {
          NODE_ENV: 'development',
        }
      }
    }
  };