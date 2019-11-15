require('../db/mongoose');

const User = require('../../src/models/user');

// 5dc147da36b7080e5bf54e09

// User.findByIdAndUpdate('5dc147b2194d780e43969293',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

const updateAgeAndCount = async (id,age)=>{
   const user = await User.findByIdAndUpdate(`${id}`,{age:age});
   const count = await User.countDocuments({age:age}).id;

   return count
}

updateAgeAndCount('5dc147b2194d780e43969293',2).then((count)=>{
    console.log(count)
}).catch(err=>{
    console.log(err)
})