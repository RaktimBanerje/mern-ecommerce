const express = require('express')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()

router.use(authMiddleware.isLogin)

router.get('/', (req, res, next)=>{
    res.status(200).send('Protected route')
})

module.exports = router