var mymodule = require('./mymodule.js')

if (process.argv.length < 4) throw new Error('Not enough arguments')
mymodule(process.argv[2], process.argv[3], function (err, filteredList) {
  if (err) return console.log(err)
  for (var i = 0; i < filteredList.length; i++) {
    console.log(filteredList[i])
  }
})
