const cartModel = require('../models/cart.model')
const productModel = require('../models/product.model')


const add = async (user, item, cb) => {   
    try{
        const savedCart = await cartModel.findById(user.id)

        if(savedCart){
            if(savedCart.items.find(cartItem => cartItem.productId == item.productId))
                return cb(200, false)
        }

        cart = await cartModel.findOneAndUpdate(
            {
                _id: user.id
            },
            {
                $push: { 
                    items: {
                            productId: item.productId,
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
    }
    catch(error) {
        cb(500, error)
        console.log(error)
    }
}

const get = async (user, cb) => {    
    var cart, items = []
    
    try{
        cart = await cartModel.findById(user.id)
    }
    catch(error) {
        cb(500, error)
        console.log(error)
    }

    items = await Promise.all(cart.items.map(async item => {
        try{
            const product = await productModel.findById(item.productId, 'name sellingPrice photo')

            if(product)    
                return {
                    productId: item.productId,
                    qty: item.qty,
                    name: product.name,
                    sellingPrice: product.sellingPrice,
                    photo: product.photo,
                    price: item.qty * product.sellingPrice
                } 
            else
             return cb(500, 'Something went wrong')      
        }
        catch(error){
            cb(500, error)
            console.log(error)
        }
    }))

    cb(200, false, items)
}

const changeQuantity = async (user, productId, qty = 0, cb) => {
    try{
        const cartItem = await cartModel.findOne( {'id': user.id , 'items.productId': {$eq: productId}}, {'items.$': 1} )
    
        if(cartItem){
            const newQty = cartItem.items[0].qty + Number(qty)

            if(newQty > 0) {
                const result = await cartModel.findOneAndUpdate({'id': user.id , 'items.productId': {$eq: productId}}, {$set: {'items.$.qty': newQty}})
                if(result)
                    cb(200, false)
                else
                    cb(500, 'Something went wrong')
            }
            else{
                return cb(400, "Item Quantity can not be ZERO or Negative")
            }
        }
        else{
            return cb(500, 'Something went wrong')
        }
        
    }
    catch(error){   
        cb(500, error)
        console.log(error)
    }
}

const remove = async (user, idx, cb) => {
            
    try{
        let result = await cartModel.findOne({_id: user.id})
        var itemsnew = result.items;
        console.log(idx)
        itemsnew.splice(Number(idx),1);
        
        result = await cartModel.findOneAndUpdate({_id: user.id}, {$set: {'items': itemsnew}})
        
        cb(200, false)
    }
    catch(error) {
        cb(500, error)
        console.log(error)
    }
}

const destroy = async (userId) => {
    try{
        const result = await cartModel.findByIdAndDelete(userId)
        
        if(result) return { status: 200, error: false }
        else return { status: 500, error: "Something went wrong" }

    }catch(error){
        console.log(error)
        return { status: 500, error: error }
    }
}

module.exports = { add, get, changeQuantity, remove, destroy }