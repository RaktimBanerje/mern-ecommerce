const stripe = require('stripe')(process.env.STRIPE_TEST_SK)

const createProduct = async product => {
    const striptProduct = stripe.products.create({
        name: product.name,
        metadata: {
            productId: product.productId
        }
    })
    
    return striptProduct
}

const createPrice = async (unit_amount, product) => {
    const stripePrice = stripe.prices.create({
        unit_amount: unit_amount,
        currency: 'inr',
        product: product.id,
    })

    return stripePrice
}   

const createCheckoutSeason = async products => {
    
    try{

        const line_items = await Promise.all(products.map(async product => {
            return (async function(){
                const stripeProduct = await createProduct(product)
                const stripePrice = await createPrice(product.price, stripeProduct)
                return {
                    price: stripePrice.id,
                    quantity: product.qty
                }
            })()
        }))

        const session = await stripe.checkout.sessions.create({
            line_items,
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}payment?sessionId=${session.id}&success=true`,
            cancel_url: `${process.env.BASE_URL}payment?canceled=true`,
        })

        return {
            status: 200, 
            error: false,
            redirecURL: session.url
        }
    }
    catch(error) {
        console.log(error)
        return {
            status: 500, 
            error: error,
            redirecURL: null
        }
    }    
}

module.exports = { createCheckoutSeason }