var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
  var readable = fs.createReadStream(process.argv[3])
  readable.pipe(res)
})

server.listen(process.argv[2])
