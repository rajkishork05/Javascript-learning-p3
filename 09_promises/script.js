let pr = new Promise((resolve, reject)=>{
    let r = Math.floor(Math.random()*10)
    setTimeout(function(){
        if(r<=5){
            resolve(r);
        }else{
            reject(r);
        }
    },2000)
})

pr.then(function(val){
    console.log(val, " your promise is resolved")
}).catch(function(val){
    console.log(val, " your promise is Rejected")
})

//promises are used when something take time tp finish (fetch data, loading, api call etc)