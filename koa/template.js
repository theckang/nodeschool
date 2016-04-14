var views = require('co-views')
var koa = require('koa')
var app = koa()

var render = views(__dirname + '/views', {
  ext: 'ejs'
})

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
}

app.use(function* (next) {
  if (this.path !== '/') return yield next
  var view = render('user', {user: user})
  this.body = yield view
})

app.listen(process.argv[2])
