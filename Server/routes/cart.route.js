const express = require('express')
const customerAuthMiddleware = require('../middleware/customer.auth.middleware')
const cartService = require('../services/cart.service')
const router = express.Router()

router.use(customerAuthMiddleware.isLogin)

router.get('/get', (req, res)=>{
    cartService.get(req.user,  async (status, error, cart)=>{
        if(error) return res.status(status).json(error)
        else return res.status(status).json(cart)
    })
})

router.post('/add', (req, res)=>{
    cartService.add(req.user, req.body, async (status, error)=>{
        if(error) return res.status(status).json(error)
        else return res.status(status)
    })
})

module.exports = router