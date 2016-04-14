var koa = require('koa')
var parse = require('co-body')
var app = koa()

app.use(function* (next) {
  if (this.path !== '/' || this.method !== 'POST') return yield next
  var body = yield parse(this)
  console.log(body['name'])
  this.body = body['name'].toUpperCase()
})

app.listen(process.argv[2])
