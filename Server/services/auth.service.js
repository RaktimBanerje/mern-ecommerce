const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userSchema = require('../models/user.model')

const login = async (user, cb)=>{
    try{
        const userData = await userSchema.findOne({email: user.email})
        if(!userData) return cb(400, false, {message: 'You are not registered user'})

        if( !await bcrypt.compare(user.password, userData.password))
            return cb(400, false, {message: 'Wrong password'} )

        const token = await jwt.sign(
            {
                sub: userData.name,
                email: userData.email
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
            name: `${user.first_name} ${user.last_name}`,
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
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        cb(200, null, true, {message: 'Valid Token'})
    }
    catch(error){
        if ( ['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name) )
            cb(400, error, false, {message: 'Access denied!'})
        else   
            cb(500, error, false, {message: 'Server error'})

    }
}

module.exports = { login, register, isAuthenticate }