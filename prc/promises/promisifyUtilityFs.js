var fs = require('fs');
var { promisify } = require('util');

var writeFilePromise = promisify(fs.writeFile);

// fs.writeFile('sample.t1xt', 'This is sameple file', ((err, data)=>{
//     if(!err) console.log(err)
//     else{
//         console.log(data)
//     }
// }))

writeFilePromise('sample.txt', "this is sample file")
    .then(()=>console.log('File written'))
    .catch(error=> console.log(`Error: ${error.message}`))

