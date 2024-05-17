module.exports = {
    apps: [
      {
        name: 'rhc-admin', // Your project name
        cwd: '/home/ubuntu/rhc-admin', // Path to your project
        script: 'npm', // For this example we're using npm, could also be yarn
        args: 'start', // Script to start the Strapi server, `start` by default
        env: {
            HOST: '0.0.0.0',
            PORT: '1337',
            APP_KEYS: '9Es31uWe/5crnuyN+YV4jg==,DB88QbO2jlY41wVLFIB3NQ==,rk4gF4Gtcr6hsIPKrj+OfA==,wp1Hb0GwgvHjsMYKnTdXSA==',
            API_TOKEN_SALT: 'xVzokmKRXKLFuBq/kPK0dQ==',
            JWT_SECRET: '5Dso24psPtPR6MXaKtfqwQ==',
            ADMIN_JWT_SECRET: 'gbb7SZsFm5o/60Lz00Z1zQ==',
            TRANSFER_TOKEN_SALT:'O25yeUSUpiZJa3mZK2QGjA==',
            URL: 'https://admin.riyadhholding.sa/',
            DATABASE_CLIENT: 'postgres',
            DATABASE_HOST: 'postgres',
            DATABASE_NAME: 'rhcadmin',
            DATABASE_USERNAME: 'admin',
            DATABASE_PORT: '5432',
            DATABASE_PASSWORD: 'fa05DE66',
            NODE_ENV: 'production'
          
        },
      },
    ],
  };
