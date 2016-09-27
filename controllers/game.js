'use strict';
const fs = require('fs'),
      promisify = require('es6-promisify'),
      readFile = promisify(fs.readFile);

module.exports = function* () {
    try {
        const data = yield readFile('./pgn/keygames/' + this.params.id + '.pgn', 'utf-8');
        this.render('game', {
            pgnText: data,
            initial: 0
        });
    } catch (ex) {
        this.status = 404;
        this.body = 'PGN not found';
    }
};
