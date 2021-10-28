const express = require('express')
const customerAuthMiddleware = require('../middleware/customer.auth.middleware')
const adminAuthMiddleware = require('../middleware/admin.auth.middleware')
const cartService = require('../services/cart.service')
const orderService = require('../services/order.service')
const router = express.Router()

router.get('/', adminAuthMiddleware.isLogin, async (req, res) => {
    const {status, error, orders} =  await orderService.get(req.query.orderId)
    if(error) return res.status(status).json(error)
    else return res.status(status).json(orders)
    
})

router.post('/place-order', customerAuthMiddleware.isLogin, async (req, res) => {  
    
    const checkoutSessionId = req.body.sessionId

    if(!checkoutSessionId) res.status(400).json()

    try{
        const {status, error, order} = await orderService.placeOrder(checkoutSessionId)       
        if(!error) await cartService.destroy(order.customer) 
        res.status(status).json()
        
    } catch(error){ 
        console.log(error)
        res.status(status).send() 
    }
})



module.exports = router