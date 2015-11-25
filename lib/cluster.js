'use strict';
var config = require('config'),
    cluster = require('cluster'),
    log = require('./logger'),
    nCPU = require('os').cpus().length;

module.exports = function(fn) {
    if (cluster.isMaster && config.useCluster) {
        for (var i = 0; i < nCPU; i++) {
            cluster.fork();
        }
        cluster.on('exit', function(worker /*,code,sig*/ ) {
            log.info('worker', worker.process.pid, 'died, restarting...');
            cluster.fork();
        });
    } else {
        fn();
    }
};
