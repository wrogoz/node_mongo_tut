const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('promise err');

    }, 2000);
});

doWorkPromise.then((result)=>{
    console.log(result + 'haha')
}).catch((err)=>{
    console.log(err)
})
