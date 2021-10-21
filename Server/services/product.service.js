const fs = require('fs')
const path = require('path')
const productModel = require('../models/product.model')

/*
* Add a new product
*/

const add = async(req, cb)=>{
    
    // Create a 
    const product = new productModel({ 
        categoryId:         req.body.categoryId,
        name:               req.body.name,
        title:              req.body.title,
        description:        req.body.description,
        marketPrice:        Number(req.body.marketPrice),
        sellingPrice:       Number(req.body.sellingPrice),
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

/*
* update a product
*/

const update = async(req, cb)=>{

    const productId = req.body._id

    let product = { 
        categoryId:         req.body.categoryId,
        name:               req.body.name,
        title:              req.body.title,
        description:        req.body.description,
        marketPrice:        Number(req.body.marketPrice),
        sellingPrice:       Number(req.body.sellingPrice),
        metaTitle:          req.body.metaTitle,
        metaDescription:    req.body.metaDescription,
    }

    const file = req.file

    if(file){
        const {photo} = await productModel.findById(productId, 'photo')
        const filePath = path.join(__dirname, '..', 'public', 'product-image', '/')
        
        fs.exists(filePath + photo, async isExists => {
           if(isExists){
                fs.unlink(filePath + photo, async err => {
                    if(err)
                        return cb(500, err, false)
                    else{
                        product.photo = file.filename
                        try{
                            const updatedProduct = await productModel.findByIdAndUpdate(productId, product, {new: true})
                            cb(200, false, updatedProduct)
                        }
                        catch(error) {
                            cb(400, error, false)
                        }
                    }                        
                })
           }
           else
              return cb(500, 'Something went wrong', false)
        })
    }
    else{
        try{
            const updatedProduct = await productModel.findByIdAndUpdate(productId, product, {new: true})
            cb(200, false, updatedProduct)
        }
        catch(error) {
            cb(400, error, false)
        }
    }
}

const get = async(productId = null)=>{
    
    let products = {}

    try{
        if(productId)
            products = await productModel.findById(productId)
        else
            products = await productModel.find()

        return {status: 200, error: false, product: products}
    }
    catch(error) {
        return {status: 500, error: error, product: false}
    }
}

const remove = async(productId = null, cb) => {
    
    const {photo} = await productModel.findById(productId, 'photo')
    const filePath = path.join(__dirname, '..', 'public', 'product-image', '/')
    
    fs.exists(filePath + photo, async isExists => {
       if(isExists){
            fs.unlink(filePath + photo, async err => {
                if(err)
                    return cb(500, err, false)
                else{
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
            })
       }
       else
          return cb(500, 'Something went wrong', false)
    })
}
module.exports = { add, get, remove, update }