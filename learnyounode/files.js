var fs = require('fs')
var path = require('path')

if (process.argv.length < 4) throw new Error('Not enough arguments')

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === ('.' + process.argv[3])) {
      console.log(list[i])
    }
  }
})
