const mongoose = require('mongoose');
const validator = require('validator');



const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(val){
            if(val.length<7 || val.toLowerCase()==='password'){
                throw Error('password is incorrect' )
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value <0){
                throw new Error('age must be positive number')
            }
        }
    },
    email:{
        type:String,
        require:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
        }
    }
});

// const me = new User({
//    name:"    Kuba",
//     password:'password  ',
//    email:"miKE@o2.pl"
// });

module.exports = User;