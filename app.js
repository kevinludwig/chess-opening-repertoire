'use strict';
const koa = require('koa'),
      path = require('path'),
      bodyParser = require('koa-bodyparser'),
      staticFiles = require('koa-static'),
      Pug = require('koa-pug'),
      errorHandler = require('koa-err'),
      log = require('./lib/logger'),
      config = require('config'),
      app = koa();

app.use(errorHandler(function(e) {
    log.error(e);
    this.status = 500;
}));
app.use(bodyParser());
app.use(staticFiles(path.join(__dirname, 'public')));

const pug = new Pug({
    viewPath: './views',
    basedir: './views',
    debug: false,
    pretty: false
});
app.use(pug.middleware);

app.use(require('./routes'))

const port = process.env.NODE_PORT || config.port,
    address = process.env.NODE_IP || 'localhost';

app.listen(port, address, () => {
    log.info('pid %d listening on port %s:%d', process.pid, address, port);
});

