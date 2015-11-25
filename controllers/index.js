'use strict';
var _ = require('underscore'),
    config = require('config'),
    util = require('../lib/util');

module.exports = function(req, res) {
    var results = config.repertoire.openings;
    res.render('index', {
        results: results.map(util.toObject),
        initial: 0,
        range: _.range(8)
    });
};
