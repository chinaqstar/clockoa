var koa = require('koa');
var app = koa();
var sendFile = require('koa-sendfile');
var route = require('koa-route');
var session = require('koa-session');

// log
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s %s %sms', this.method, this.url, this.status, ms);
})

var html = '/index.html';

app.keys = ['some secret hurr'];
app.use(session(app));

app.use(route.post('/login', function *(res, req) {
  this.session.user = {
    name: 123
  }
  this.status = 200;
}));

app.use(route.get('/register', function *(res, req) {
  if(this.query.REGISTER_TYPE === '1') {
    html = '/index_on.html';
  }
  if(this.query.REGISTER_TYPE === '2') {
    html = '/index_off.html';
  }
  this.status = 200;
}));

app.use(route.get('/duty', function *(res, req) {
  console.log(html);
  var status = yield sendFile(this, __dirname + html);
}));

// start server, listen on 9000
app.listen(9000, '0.0.0.0', function() {
  console.log('start listen on port 9000');
});
