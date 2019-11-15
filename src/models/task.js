const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        
    }

})


userSchema.pre('save',async function(){
    const task = this;

    console.log('task pre workin fine')

    
})

const Task = mongoose.model('Task',userSchema
)

module.exports = Task;