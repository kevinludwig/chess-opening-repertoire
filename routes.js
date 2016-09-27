'use strict';
const Router = require('koa-router');
const router = new Router();

router.get('/', require('./controllers/index'));
router.get('/list/:id', require('./controllers/list'));
router.get('/detail/:id', require('./controllers/detail'));
router.get('/game/:id', require('./controllers/game'));
module.exports = router.routes();
