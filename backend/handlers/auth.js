const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signIn = async function(req, res, next){
    try{
        let user = await db.User.findOne({
            email:req.body.email
        });
        let {id, firstName, surname, middleName, DOB} = user;
        let isMatch = await user.comparePassword(req.body.password);
        if(isMatch){
            let token = jwt.sign({
                id,
                firstName,
                surname,
                middleName,
                DOB
            }, process.env.SECRET_KEY)

            return res.status(200).json({
                id,
                firstName,
                surname,
                middleName,
                DOB,
                token
            })
        }else{
            return next({
                status:400,
                message:"Invalid email or password"
            })
        }
    }catch(error){
        return next({
            status:400,
            message:"Invalid email or password"
        })
    }
}

exports.signUp = async function(req, res, next){
   try{
    let user = await db.User.create(req.body);
    const {id, firstName, surname, middleName, DOB} = user;
    let token = jwt.sign({
        id,
        firstName,
        surname,
        middleName,
        DOB
    }, process.env.SECRET_KEY)

    return res.status(200).json({
        id,
        firstName,
        surname,
        middleName,
        DOB,
        token
    });
   }catch(error) {
        if(error.code === 11000) {
            error.message = "Sorry that email or username is taken";
        }
        return next({
            status:400,
            message:"Sorry that email or username is taken"
        });
   }
};



