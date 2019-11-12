require('../db/mongoose');
const Task = require('../models/task');

// Task.findByIdAndRemove('5dc14d00e9aa640f48ec8ee8').then(()=>{
//  return Task.countDocuments({completed:false})
// }).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })


const deleteTaskAndCount = async(id) =>{
   await Task.findByIdAndDelete(id);
   const count = await Task.countDocuments({completed:false});
   return count
}

deleteTaskAndCount('5dc3e84003da3112638ad14e')
.then(result=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})

