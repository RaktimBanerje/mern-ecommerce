const authService = require('../services/auth.service')

const login = (req, res, next)=>{
    authService.login(req.body, async (status, token, message) => {
        if(token){ 
            res.cookie('access_token', token, {
                maxAge: process.env.ACCESS_TOKEN_EXPAIRY_TIME, 
                httpOnly: true
            })
        }
        res.status(status).json(message)
    })
}

const register = (req, res, next)=>{
    authService.register(req.body, async (status, message) => {
        res.status(status).json(message)
    })
}

const isLogin = async (req, res, next)=>{
    if(req.cookies.access_token){
        authService.isAuthenticate(req.cookies.access_token, async (status, error, valid, message)=>{
            if(error) return res.status(status).json(message)
            if(valid) return next()            
        })  
    }
    else{
        res.status(400).json({message: 'Access denied!'})
    }
}

module.exports = { login, register, isLogin }