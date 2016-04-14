var koa = require('koa')
var parse = require('co-body')
var session = require('koa-session')

var form = '<form action="/login" method="POST">\
              <input name="username" type="text" value="username">\
              <input name="password" type="password" placeholder="The password is \'password\'">\
              <button type="submit">Submit</button>\
            </form>'

var app = koa()

app.keys = ['test']
app.use(session(app))

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;
  if (this.session.authenticated) {
    this.body = 'hello world'
  } else {
    this.throw(401, 'please login')
  }
})

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next
  if (this.method === 'GET') return this.body=form
  if (this.method !== 'POST') return yield next

  var body = yield parse(this)
  if (body['username'] === 'username' && body['password'] === 'password') {
    this.session.authenticated = true
    this.redirect('/')
  } else {
    this.throw(400, 'invalid login')
  }
})

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next
  this.session.authenticated = false
  this.redirect('/login')
})

app.listen(process.argv[2])
