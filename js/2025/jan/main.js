
function promiseExample(){
   return new Promise(function(resolve, reject){
        resolve('promise resolved');
    }).then(function(res){
        console.log(res);
        return res;
    }).catch(function(err){
        console.log(err);
        throw new Error('promise rejected');
    })
}

promiseExample();

