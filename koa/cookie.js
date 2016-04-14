var koa = require('koa')
var app = koa()

app.keys = ['test']

app.use(function* (next) {
  if (this.path !== '/') return yield next
  var view = this.cookies.get('view', { signed: true }) || 0
  view++
  this.cookies.set('view', view, { signed: true })
  this.body = view + ' views'
})

app.listen(process.argv[2])
