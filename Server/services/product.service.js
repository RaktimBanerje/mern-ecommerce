const productModel = require('../models/product.model')

/*
* add a new product
*/

const add = async(req, cb)=>{
    
    const product = new productModel({ 
        categoryId:         req.body.categoryId,
        name:               req.body.name,
        title:              req.body.title,
        description:        req.body.description,
        marketPrice:        req.body.marketPrice,
        sellingPrice:       req.body.sellingPrice,
        metaTitle:          req.body.metaTitle,
        metaDescription:    req.body.metaDescription,
        photo:              req.file.filename,
    })

    try{
        const newProduct = await product.save(product)
        cb(200, false, newProduct)
    }
    catch(error) {
        cb(400, error, false)
    }
}

const get = async(productId = null, cb)=>{
    
    let products = {}

    try{
        if(productId)
            products = await productModel.findById(productId)
        else
            products = await productModel.find()

        cb(200, false, products)
    }
    catch(error) {
        cb(500, error, false)
    }
}

const remove = async(productId = null, cb)=>{
    try{
        const product = await productModel.findByIdAndDelete(productId)
        if(product)
            cb(200, false)
        else
            cb(400, false)
    }
    catch(error) {
        cb(500, error)
    }
}
module.exports = { add, get, remove }