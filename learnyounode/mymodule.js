var fs = require('fs')
var path = require('path')

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err)
    callback(null, list.filter(file => path.extname(file) === '.' + extension))
  })
}
