'use strict';
var fs = require('fs'),
    config = require('config');

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
        color = 'white';

    g = match(config.repertoire.white, req.params.id);
    if (!g) {
        g = match(config.repertoire.black, req.params.id);
        color = 'black';
    }

    if (g === null) {
        res.status(404).send('ID not found');
    } else {
        fs.readFile('./pgn/' + color + '/' + req.params.id + '.pgn', 'utf-8', function(err, data) {
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
