var http = require('http')
var url = require('url')

var server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('Only accept GET\n')
  }
  var parsed = url.parse(req.url, true)

  if (parsed.pathname === '/api/parsetime' || parsed.pathname === '/api/unixtime') {
    var date = new Date(parsed.query['iso'])

    // error if query is missing or time is not parseable
    if (isNaN(date.getTime())) {
      res.writeHead(400, {'Content-Type': 'text/plain'})
      res.end('Query string must contain valid ISO-format time')
    }
    var result = parsed.pathname === '/api/parsetime'
      ? { 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }
      : { 'unixtime': date.getTime() }

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Endpoint does not exist')
  }
})

server.listen(process.argv[2])
