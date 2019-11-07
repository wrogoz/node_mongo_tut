require('../db/mongoose');

const User = require('../../src/models/user');

// 5dc147da36b7080e5bf54e09

User.findByIdAndUpdate('5dc147b2194d780e43969293',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})