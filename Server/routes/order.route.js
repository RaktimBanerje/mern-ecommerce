const express = require('express')
const customerAuthMiddleware = require('../middleware/customer.auth.middleware')
const cartService = require('../services/cart.service')
const orderService = require('../services/order.service')
const router = express.Router()

router.use(customerAuthMiddleware.isLogin)

router.post('place-order', async (req, res) => {  
    const checkoutSessionId = req.body.sessionId

    if(!checkoutSessionId) res.status(400)

    try{ await cartService.destroy(user) } catch(error){ console.log(error) }

    const {status, error} = await orderService.placeOrder(user, checkoutSessionId)

    if(error) return res.status(status).json(error.message)
    else return res.status(status).send()

})

module.exports = router