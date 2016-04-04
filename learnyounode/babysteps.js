if (process.argv.length < 3) throw new Error('Not enough arguments')
var sum = 0
for (var i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i])
}
console.log(sum)
