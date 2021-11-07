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

const retriveProduct = async id => {
    return await stripe.products.retrieve(id);
}

const retrivePrice = async id => {
    return await stripe.prices.retrieve(id);
}

const createPrice = async (unit_amount, product) => {
    const stripePrice = stripe.prices.create({
        unit_amount: unit_amount,
        currency: 'inr',
        product: product.id,
    })

    return stripePrice
}   

const createCheckoutSeason = async (user, products, shippingDetails) => {
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
            client_reference_id: user.id,
            metadata: { shippingDetails: JSON.stringify(shippingDetails) },
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}payment?sessionId={CHECKOUT_SESSION_ID}&success=true`,
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

const retriveSession = async (sessionId) => {
    try{
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        const line_items = await stripe.checkout.sessions.listLineItems(sessionId)

        session.metadata.shippingDetails = JSON.parse(session.metadata.shippingDetails)
        session.items = line_items.data

        return {
            status: 200,
            error: false,
            session: session
        }
    }
    catch(error) {
        return{
            status: 500, 
            error: error,
            session: null
        }
    }
}

module.exports = { createCheckoutSeason, retriveSession, retriveProduct, retrivePrice }