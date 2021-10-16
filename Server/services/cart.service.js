const cartModel = require('../models/cart.model')

const add = async (user, item, cb) => {   
    try{
        const savedCart = await cartModel.findById(user.id)

        if(savedCart){
            if(savedCart.items.find(cartItem => cartItem.id == item.productId))
                return cb(200, false)
        }

        cart = await cartModel.findOneAndUpdate(
            {
                _id: user.id
            },
            {
                $push: { 
                    items: {
                            _id: item.productId,
                            qty: item.qty,
                            categoryId: item.categoryId
                        }  
                  } 
            },
            {
                upsert: true,
                new: true
            }
        )
        console.log(cart)
    }
    catch(error) {
        console.log(error)
    }
}

const get = async (user, cb) => {    
    try{
        const cart = await cartModel.findById(user.id)
        cb(200, false, cart.items)
    }
    catch(error) {
        cb(500, error)
    }
}

module.exports = { add, get }