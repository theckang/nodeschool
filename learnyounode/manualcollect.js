var http = require('http')

http.get(process.argv[2], (res) => {
  var data = ''
  res.setEncoding('utf8')
  res.on('data', function (chunk) {
    data += chunk
  })
  res.on('error', console.error)
  res.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
})
