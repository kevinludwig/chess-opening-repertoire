'use strict';
var fs = require('fs'),
    repertoire = require('../repertoire');

function match(list, id) {
    var g = null;
    list.forEach(function(opening) {
        opening.v.forEach(function(v) {
            if (v.pgn === id) {
                g = v;
                return;
            }
        });
        if (g) {
            return;
        }
    });
    return g;
}

module.exports = function(req, res) {
    var g = null,
        i,
        key,
        keys = ['d4', 'e4e5', 'chigorin', 'english', 'other'];

    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        g = match(repertoire[key], req.params.id);
        if (g) break;
    }

    if (g === null) {
        res.status(404).send('ID not found');
    } else {
        fs.readFile('./pgn/' + key + '/' + req.params.id + '.pgn', 'utf-8', function(err, data) {
            if (err) {
                res.status(404).send('PGN not found');
            } else {
                res.render('detail', {
                    title: g.name,
                    pgnText: data,
                    keygames: g.keygames || [],
                    initial: g.initial
                });
            }
        });
    }
};
