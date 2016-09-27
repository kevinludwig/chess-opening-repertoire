'use strict';
var _ = require('underscore'),
    repertoire = require('../repertoire'),
    slugify = require('../lib/slugify'),
    util = require('../lib/util');

module.exports = function(req, res) {
    var all = Object.keys(repertoire).reduce(function(acc, k) { return acc.concat(repertoire[k]) }, []),
        opening = all.filter(function(o) {
            return slugify(o.name) === req.params.id;
        });
    if (!opening.length) {
        res.send(404);
    } else {
        res.render('list', {
            item: util.toObject(opening[0]),
            initial: 0,
            range: _.range(8)
        });
    }
};
