const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./1/2/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./1/2/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
    writeFile(
        './1/result-async.txt',
        'Here is the result : ' + first + second,
        (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        }
        )
})
})

console.log('starting next task')