const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./1/2/first.txt', 'utf-8')
const second = readFileSync('./1/2/second.txt', 'utf-8')

writeFileSync(
    './1/result.txt',
    'It\'s the result :' + first + second,
    {flag: 'a'}
    )

console.log('done with this task')
console.log('starting the next one')