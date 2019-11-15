const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
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
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
           
        }
    }})

    userSchema.statics.findByCredentials = async(email, password)=>{
        const user = await User.findOne({email:email})

        if(!user){
            throw new Error('unable to login')
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error('unable to login')
        }

        return user
    }

    // hash password before saving!
userSchema.pre('save',async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})
const User = mongoose.model('User',userSchema);

// const me = new User({
//    name:"    Kuba",
//     password:'password  ',
//    email:"miKE@o2.pl"
// });

module.exports = User;