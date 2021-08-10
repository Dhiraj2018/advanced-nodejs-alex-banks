function delay(delayInSec, callback){
    setTimeout(callback, delayInSec*1000);
}

delay(2,()=>{
    console.log('delay of 2 seconds')
    delay(1,()=>{
        console.log(`delay of 3 seconds`)
        delay(1,()=>{
            console.log(`delay of 4 seconds`)
        })
    })
})