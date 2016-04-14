var koa = require('koa')
var app = koa()

function responseTime () {
  return function* (next) {
    console.log(this)
    var start = new Date()
    yield next
    this.set('X-Response-Time', Date() - start)
  }
}

function upperCase () {
  return function* (next) {
    yield next
    var body = this.body.toUpperCase()
    this.body = body
  }
}

app.use(responseTime())
app.use(upperCase())
app.use(function* () {
  this.body = 'hello koa'
})

app.listen(process.argv[2])
