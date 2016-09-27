'use strict';
const _ = require('underscore'),
    repertoire = require('../repertoire'),
    util = require('../lib/util');

module.exports = function* () {
    this.render('index', {
        d4: repertoire.d4.map(util.toObject),
        e4e5: repertoire.e4e5.map(util.toObject),
        chigorin: repertoire.chigorin.map(util.toObject),
        english: repertoire.english.map(util.toObject),
        other: repertoire.other.map(util.toObject),
        initial: 0,
        range: _.range(8)
    });
};
