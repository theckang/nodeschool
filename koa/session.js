var session = require('koa-session')
var koa = require('koa')
var app = koa()

app.keys = ['test']
app.use(session(app))

app.use(function* (next) {
  if (this.path !== '/') return yield next
  var views = this.session.views || 0
  this.session.views = views + 1
  this.body = this.session.views + ' views'
})

app.listen(process.argv[2])
