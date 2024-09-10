// logging.js

const winston = require('winston');

// Create a logger instance with transports to both console and file
const logger = winston.createLogger({
    transports: [   
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'depositTracker.log' })
    ]
});

module.exports = logger;
