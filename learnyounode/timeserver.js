var net = require('net')
var strftime = require('strftime')

var server = net.createServer((socket) => {
  var date = strftime('%Y-%m-%d %H:%M', new Date())
  socket.write(date + '\n')
  socket.end()
})

server.listen(process.argv[2])
