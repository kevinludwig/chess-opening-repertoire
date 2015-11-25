'use strict';
var _ = require('underscore'),
    config = require('config'),
    slugify = require('../lib/slugify'),
    util = require('../lib/util');

module.exports = function(req, res) {
    var opening = config.repertoire.openings.filter(function(o) {
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
