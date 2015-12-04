'use strict';
var fs = require('fs'),
    config = require('config');

module.exports = function(req, res) {
    fs.readFile('./pgn/keygames/' + req.params.id + '.pgn', 'utf-8', function(err, data) {
        if (err) {
            res.status(404).send('PGN not found');
        }
        else {
            res.render('game', {
                pgnText: data,
                initial: 0
            });
        }
    });
};
