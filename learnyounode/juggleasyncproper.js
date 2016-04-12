var eachAsync = require('each-async')
var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)
var results = []
var len = urls.length
var num = 0

var get = function (url, index, done) {
  http.get(url, (res) => {
    var index = urls.findIndex((element, index, array) => element === url)  // linear search
    if (index !== -1) {
      res.pipe(bl((err, data) => {
        if (err) done(err)
        results[index] = data.toString()
        num += 1
        if (num === len) {
          for (var i = 0; i < len; i++) {
            console.log(results[i])
          }
        }
      }))
    }
    done()
  })
}

eachAsync(urls, get, error => console.error(error))
