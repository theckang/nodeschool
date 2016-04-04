var http = require('http')

if (process.argv.length < 3) throw new Error('Not enough arguments')

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(chunk)
  })
}).on('error', (e) => {
  console.log('Got error: ' + e.message)
})
