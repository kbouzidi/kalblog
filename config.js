var path = require('path'),
    config;

config = {

    production: {
        url: process.env.URL,
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: process.env.RDS_HOSTNAME,
                user: process.env.RDS_USERNAME,
                password: process.env.RDS_PASSWORD,
                database: process.env.RDS_DB_NAME,
                port: process.env.RDS_PORT
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

module.exports = config;
