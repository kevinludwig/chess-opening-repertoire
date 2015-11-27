'use strict';
var _ = require('underscore'),
    config = require('config'),
    slugify = require('../lib/slugify'),
    util = require('../lib/util');

module.exports = function(req, res) {
    var all = config.repertoire.white.concat(config.repertoire.black);
    var opening = all.filter(function(o) {
        return slugify(o.name) === req.params.id;
    });
    if (!opening.length) res.send(404);
    else {
        res.render('list', {
            item: util.toObject(opening[0]),
            initial: 0,
            range: _.range(8)
        });
    }
};
