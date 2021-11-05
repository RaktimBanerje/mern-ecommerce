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

router.patch('/increment', (req, res)=>{

    const productId = req.query.productId, qty = req.query.qty

    if(!productId || !qty)  return res.status(400).send()     
    
    cartService.changeQuantity(req.user, productId, qty, (status, error) => {
        if(error) return res.status(status).json(error)
        else return res.status(status).send()
    })
})

router.delete('/remove/:productId',  (req, res) => {
    
    if(!req.params['productId']) return res.status(400).send()

    cartService.remove(req.user, req.params['productId'], (status, error) => {
        if(error) return res.status(status).json(error)
        else return res.status(status).send()
    })
})

router.post('/add', (req, res)=>{
    cartService.add(req.user, req.body, async (status, error)=>{
        if(error) return res.status(status).json(error)
        else return res.status(status).send()
    })
})

module.exports = router