const customerAuthService = require('../services/customer.auth.service')

const login = (req, res, next)=>{
    customerAuthService.login(req.body, async (status, token, message) => {
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
    customerAuthService.register(req.body, async (status, message) => {
        res.status(status).json(message)
    })
}

const isLogin = async (req, res, next)=>{
    if(req.cookies.access_token){
        customerAuthService.isAuthenticate(req.cookies.access_token, async (status, error, user, message)=>{
            if(error){ 
                req.user = null
                return res.status(status).json(message)
            }
            if(user){
                req.user = user
                return next()
            }            
        })  
    }
    else{
        res.status(400).json({message: 'Access denied!'})
    }
}

const logout = async (req, res, next)=>{
    if(req.cookies.access_token){
        customerAuthService.logout(req.cookies.access_token, async (status, error)=>{
            if(error) return res.status(status).json(error)
            else return next()            
        })  
    }
    else{
        res.status(400).json({message: 'Bad request!'})
    }
}

const forgotPassword = async (req, res, next)=>{
    if(req.body){
        customerAuthService.forgotPassword(req.body, async (status, error, message)=>{
            
        })
    }
}

module.exports = { login, register, isLogin, logout, forgotPassword }