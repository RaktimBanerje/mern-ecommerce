const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userSchema = require('../models/customer.user.model')
const ineffectualTokenSchema = require('../models/ineffectualToken.model')
const transporter = require('./email.service')


const login = async (user, cb)=>{
    try{
        const userData = await userSchema.findOne({email: user.email})
        if(!userData) return cb(400, false, {message: 'You are not registered user'})

        if( !await bcrypt.compare(user.password, userData.password))
            return cb(400, false, {message: 'Wrong password'} )

        const token = await jwt.sign(
            {
                sub: userData.name,
                email: userData.email,
                id: userData.id,
            }, 
            process.env.SECRET_KEY,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPAIRY_TIME
            }
        )
        return cb(200, token, {message: 'Success'})
    }
    catch(error){
        cb(500, error, null, {message: 'Server error'})
    }
}

const register = async (user, cb)=>{
    try{
        const isExistingUser = await userSchema.findOne({email: user.email})     
        if(isExistingUser) return cb(409, {message: 'You are already registered'})
        
        const hashPassword = await bcrypt.hash(user.password, 12)

        const userData = new userSchema({
            name: user.name,
            email: user.email,
            password: hashPassword
        })       
        const result = await userData.save()
        cb(200, {message: 'You are successfully registered'})
    }
    catch(error){
        console.log(error)
        cb(500, {message: 'Server error'})
    }    
}

const isAuthenticate = async (token, cb)=>{
    try {
        const tokenSignature = token.split('.')[2]
        const ineffectualToken = await ineffectualTokenSchema.find({signature: tokenSignature})
        if(ineffectualToken.length > 0) throw new Error('IneffectualToken')

        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        cb(200, null, decode, {message: 'Valid Token'})
    }
    catch(error){
        if ( ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name) )
            cb(400, error, false, {message: 'Access denied!'})
        else if(error.message === 'IneffectualToken'){
            cb(400, error, false, {message: 'Access denied!'})
        }
        else   
            cb(500, error, false, {message: 'Server error'})

    }
}

const logout = async (token, cb)=>{
    try {
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        const tokenSignature = token.split('.')[2]
        const ineffectualToken = new ineffectualTokenSchema({
            signature: tokenSignature,
            exp: decode.exp
        })
        const result = await ineffectualToken.save()
        cb(200);
    }
    catch(error){
        if ( ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name) )
            cb(400, {message: 'Bad request!'})
        else   
            cb(500, {message: 'Server error'})

    }
}

const forgotPassword = async (user, cb)=>{
    if(!user.email) return cb(400, false, {message: 'Bad request'})
    
    try{
        const result = await userSchema.find({email: user.email})
        const passwordResetLink = `${process.env.BASE_URL}${result[0].email}/${result[0].password}`
        const info = await transporter.sendMail({ 
            from: process.env.EMAIL_USER_NAME,
            to: result[0].email,
            subject: "Reset Password",
            html: `Please click on the following link or open on the browser to chnage your password <br> <br> ${passwordResetLink}`
        })
        console.log(info)
    }
    catch(error){
        console.log(error) 
        cb(500, error, {message: 'Server error'})
    }
}
module.exports = { login, register, isAuthenticate, logout, forgotPassword }