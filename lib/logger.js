'use strict';
var winston = require('winston'),
    config = require('config');

module.exports = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            level: config.logger.level
        })
    ]
});
