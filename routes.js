'use strict';

module.exports = function(app) {
    app.get('/', require('./controllers/index'));
    app.get('/list/:id', require('./controllers/list'));
    app.get('/detail/:id', require('./controllers/detail'));
};
