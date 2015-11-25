'use strict';
var slugify = require('./slugify');

function isDigit(c) {
    return c >= '0' && c <= '9';
}

function isUpper(c) {
    return c === c.toUpperCase();
}

function makeImage(c) {
    var color = isUpper(c) ? 'w' : 'b';
    return '/img/' + color + c.toLowerCase() + '.png';
}

exports.toObject = function(elem) {
    var fen = elem.fen.split(' ')[0],
        n = fen.length,
        pos = 0,
        i,
        c,
        m = {};

    for (i = 0; i < n; i++) {
        c = fen.charAt(i);
        if (isDigit(c)) {
            pos += parseInt(c, 10);
        } else if (c !== '/') {
            m[pos] = makeImage(c);
            pos += 1;
        }
    }
    return {
        id: slugify(elem.name),
        fen: fen,
        board: m,
        name: elem.name,
        v: elem.v
    };
};
