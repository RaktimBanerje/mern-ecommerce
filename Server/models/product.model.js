const mongoose = require('mongoose')

const productModel = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Product {Field} is require']
    },
    title: {
        type: String,
        require: [true, 'Product {Field} is require']
    },
    description: {
        type: String,
        require: [true, 'Product {Field} is require']
    },
    marketPrice: {
        type: Number,
        min: [1, 'Product {Field} can\'t be ZERO'], 
        require: [true, 'Product {Field} is require']
    },
    sellingPrice: {
        type: Number,
        min: [1, 'Product {Field} can\'t be ZERO'], 
        require: [true, 'Product {Field} is require']
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    photo: {
        type: String,
        require: [true, 'Product {Field} is require']
    }  
}, {timestamp: true})

module.exports = mongoose.model('product', productModel)