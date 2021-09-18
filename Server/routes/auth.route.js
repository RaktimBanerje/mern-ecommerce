const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/login', authMiddleware.login)

router.post('/register', authMiddleware.register)

router.get('/authenticate', authMiddleware.isLogin, (_, res)=>{
    res.status(200).json({message: 'Authenticate'})
})

module.exports = router