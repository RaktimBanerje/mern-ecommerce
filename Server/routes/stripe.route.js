const express = require('express')
const productService = require('../services/product.service')
const stripeService = require('../services/stripe.service')
const customerAuthMiddleware = require('../middleware/customer.auth.middleware')
const router = express.Router()

router.use(customerAuthMiddleware.isLogin)

router.post('/checkout', async (req, res) => {

    if(!req.body.items || !Array.isArray(req.body.items) || req.body.items.length <= 0)
        return res.status(400).send()

    let products = await Promise.all(req.body.items.map(async item => {
        const { product } = await productService.get(item.productId)

        return {
            name: product.name,
            price: product.sellingPrice * 100,
            photo: product.photo,
            productId: item.productId,
            qty: item.qty
        }
    }))
        
    const { status, error, redirecURL } = await stripeService.createCheckoutSeason(products)
    
    if(error) res.status(status).json(error)
    else res.status(status).json({redirecURL})
})



module.exports = router