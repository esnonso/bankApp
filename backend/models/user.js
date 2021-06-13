const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    DOB: {
        type:String,
        required:true
    }
})

userSchema.pre('save', async function(next){
    try{
        if(!this.isModified('password')){
            return next()
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword
        return next()
    }catch(error){
        return next(error)
    }
});


userSchema.methods.comparePassword = async function(plainPassword, next) {
    try{
        let isMatch = await bcrypt.compare(plainPassword, this.password)
        return isMatch;
    }catch(error){
        next(error)
    }
}

const User = mongoose.model("User", userSchema);

module.exports = User;