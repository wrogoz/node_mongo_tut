const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    })
}

// add(1,2).then((sum)=>{
//     console.log(sum)
    
// }).catch((e)=>[
//     console.log(e)
// ])

add(1,1).then((sum)=>{
    console.log(sum)
    return add(sum,2)
}).then(sum2=>{
    console.log(sum2)
}).catch(err=>{
    console.log(err)
})


