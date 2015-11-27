'use strict';
var _ = require('underscore'),
    config = require('config'),
    util = require('../lib/util');

module.exports = function(req, res) {
    res.render('index', {
        white: config.repertoire.white.map(util.toObject),
        black: config.repertoire.black.map(util.toObject),
        initial: 0,
        range: _.range(8)
    });
};
