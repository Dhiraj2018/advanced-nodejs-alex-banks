function hideStr(str, callback){
    callback(str.replace(/[a-zA-Z]/g,'X'))
}

hideStr("Hello World", (result)=>{
    console.log(result)
})