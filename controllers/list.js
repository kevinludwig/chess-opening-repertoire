'use strict';
const _ = require('underscore'),
    repertoire = require('../repertoire'),
    slugify = require('../lib/slugify'),
    util = require('../lib/util');

module.exports = function* () {
    var all = Object.keys(repertoire).reduce((acc, k) => acc.concat(repertoire[k]), []),
        opening = all.filter(o => slugify(o.name) === this.params.id);
    if (!opening.length) {
        this.status = 404;
    } else {
        this.render('list', {
            item: util.toObject(opening[0]),
            initial: 0,
            range: _.range(8)
        });
    }
};
