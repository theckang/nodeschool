var fs = require('fs')

if (process.argv.length < 3) throw new Error('Not enough arguments')

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err
  console.log(data.split('\n').length - 1)
})
