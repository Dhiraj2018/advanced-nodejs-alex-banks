function delay(delayInSeconds){
    return new Promise((resolve, reject)=>{

        if(delayInSeconds > 3){
            reject( new Error(`Error occured: delay of ${delayInSeconds} seconds is too long`))
        }
      setTimeout(() => {
          resolve(`Delay of ${delayInSeconds} has occured`)
      }, delayInSeconds * 1000);
})
}

delay(2) // use delay(2) for success message
    .then(data=> console.log(data))
    .catch(err=> console.log(err.message))