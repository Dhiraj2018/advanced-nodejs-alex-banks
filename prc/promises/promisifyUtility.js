const { promisify } = require('util')
var delay= function(delayInSeconds, callback){
    if(delayInSeconds > 3){
        callback( new Error('Delay is more than 3 seconds'))
    }else{
        setTimeout(()=>{
            callback(null, `the delay of ${delayInSeconds} have occured`)
        }, delayInSeconds*1000)
    }
}

// the call back function with error and result as the first and the second arguments
// delay(4, (err, result)=>{
//     if(err){
//         console.log(`Error: ${err.message}`)
//     }else{
//         console.log(result)
//     }
// })

// the callbakc function can be promisify if the arguments of the callback is (err, result)

var promisifyDelay = promisify(delay);
promisifyDelay(4)
    .then(console.log)
    .catch(err=> console.log(`Error: ${err.message}`))