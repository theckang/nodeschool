var fs = require('fs')

if (process.argv.length < 3) throw new Error('Not enough arguments')
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString('ascii')
console.log(str.split('\n').length - 1)
