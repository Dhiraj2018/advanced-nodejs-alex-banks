function hideStr(str, callback){
    process.nextTick(()=>{
        callback(str.replace(/[a-zA-Z]/g,'X'))

    })
}
hideStr("Hello World", (result)=>{
    console.log(result)
})
console.log('done')