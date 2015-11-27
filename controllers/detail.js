'use strict';
var fs = require('fs'),
    config = require('config');

module.exports = function(req, res) {
    var all = config.repertoire.white.concat(config.repertoire.black),
        g = null;
    all.forEach(function(opening) {
        opening.v.forEach(function(v) {
            if (v.pgn === req.params.id) {
                g = v;
                return;
            }
        });
        if (g) return;
    });

    if (g === null) {
        res.status(404).send('ID not found');
    }
    else {
        fs.readFile('./pgn/' + req.params.id + '.pgn', 'utf-8', function(err, data) {
            if (err) {
                res.status(404).send('PGN not found');
            }
            else {
                res.render('detail', {
                    title: g.name,
                    pgnText: data,
                    initial: g.initial
                });
            }
        });
    }
};
