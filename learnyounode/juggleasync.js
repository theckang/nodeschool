var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var results = []
var len = urls.length
var num = 0

var get = function (url) {
  http.get(url, (res) => {
    var index = urls.findIndex((element, index, array) => element === url)  // linear search
    if (index !== -1) {
      res.pipe(bl((err, data) => {
        if (err) return console.error(err)
        results[index] = data.toString()
        num += 1
        if (num === len) {
          for (var i = 0; i < len; i++) {
            console.log(results[i])
          }
        }
      }))
    }
  })
}

// we should use async, but try manual for now
for (var j = 0; j < len; j++) {
  get(urls[j])
}
