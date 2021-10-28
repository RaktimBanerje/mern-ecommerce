const stripeService = require('../services/stripe.service')
const orderModel = require('../models/order.model')

const placeOrder = async (checkoutSessionId) => {
    const {error, session} = await stripeService.retriveSession(checkoutSessionId)
    
    if(error){
        return {
            status: 500, 
            error: error,
            newOrder: null
        }
    }
    else{
        try{
            let order = {
                _id : session.id.split('cs_test_')[1],

                customer: session.client_reference_id,

                items: await Promise.all(session.items.map(async item => {            
                    console.log(item)
                    const data = await Promise.all(
                        [
                            stripeService.retriveProduct(item.price.product),
                            stripeService.retrivePrice(item.price.id)
                        ]
                    )
                    return {
                        productId: data[0].metadata.productId,
                        unit_amount: data[1].unit_amount / 100,
                        name: item.description,
                        qty: item.quantity
                    }
                })),

                total_amount: session.amount_total / 100,

                shipping_details: {
                    address: session.metadata.shippingDetails.address_line,
                    city: session.metadata.shippingDetails.city,
                    landmark: session.metadata.shippingDetails.landmark,
                    zip: session.metadata.shippingDetails.zip,
                    name: session.metadata.shippingDetails.name,
                    phone: session.metadata.shippingDetails.phone,
                },
            }

            order = new orderModel(order)
            const newOrder = await order.save()

            return { status: 200, error: false, order: newOrder }
        }
        catch(error) {
            console.log(error)
            return {
                status: 500, 
                error: error,
                newOrder: null
            }
        }    
    }
}

const get = async(orderId) => {
    var orders = []

    try{
        if(orderId)
            orders = await orderModel.findById(orderId).populate('customer', 'name email')
        else
            orders = await orderModel.find().populate('customer', 'name email')
         
        
        return {
            status: 200,
            error: false,
            orders: orders
        }      
    }
    catch(error) {
        return {
            status: 500,
            error: error,
            orders: null
        }
    }
}

module.exports = { placeOrder, get }