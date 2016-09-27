'use strict';
const fs = require('fs'),
      promisify = require('es6-promisify'),
      repertoire = require('../repertoire'),
      readFile = promisify(fs.readFile);

function match(list, id) {
    let g = null;
    list.forEach((opening) => {
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

module.exports = function* () {
    let g = null,
        i,
        key,
        keys = ['d4', 'e4e5', 'chigorin', 'english', 'other'];

    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        g = match(repertoire[key], this.params.id);
        if (g) break;
    }

    if (g === null) {
        this.status = 404;
        this.body = 'ID not found';
    } else {
        try {
            const data = yield readFile('./pgn/' + key + '/' + this.params.id + '.pgn', 'utf-8');
            this.render('detail', {
                title: g.name,
                pgnText: data,
                keygames: g.keygames || [],
                initial: g.initial
            });
        } catch (ex) {
            this.status = 404;
            this.body = 'PGN not found';
            return;
        }
    }
};
