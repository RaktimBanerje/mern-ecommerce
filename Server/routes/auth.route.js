const express = require('express')
const adminAuthMiddleware = require('../middleware/admin.auth.middleware')
const customerAuthMiddleware = require('../middleware/customer.auth.middleware')

const router = express.Router()

router.post('/admin/login', adminAuthMiddleware.login)

router.post('/admin/register', adminAuthMiddleware.register)

router.get('/admin/authenticate', adminAuthMiddleware.isLogin, (_, res)=>{
    res.status(200).json({message: 'Authenticate'})
})

router.get('/admin/logout', adminAuthMiddleware.logout, (_, res)=>{
    res.status(200).send();
})

router.post('/admin/forgot-password', adminAuthMiddleware.forgotPassword, (_, res)=>{
    res.status(500).send()    
})


router.post('/customer/login', customerAuthMiddleware.login)

router.post('/customer/register', customerAuthMiddleware.register)

router.get('/customer/authenticate', customerAuthMiddleware.isLogin, (_, res)=>{
    res.status(200).json({message: 'Authenticate'})
})

router.get('/customer/logout', customerAuthMiddleware.logout, (_, res)=>{
    res.status(200).send();
})

router.post('/customer/forgot-password', customerAuthMiddleware.forgotPassword, (_, res)=>{
    res.status(500).send()    
})

module.exports = router