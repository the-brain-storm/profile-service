const { createLogger, transports, format } = require('winston');
require('winston-mongodb');

const dbUrl = 'mongodb://localhost:27017/logService';

const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), format.simple())
        }),
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.MongoDB({
            db: dbUrl,
            level: 'info',
            options: { useUnifiedTopology: true },
            format: format.combine(format.timestamp(), format.json()),
            collection: 'profilelogs'
        })
    ]
})

module.exports = logger;