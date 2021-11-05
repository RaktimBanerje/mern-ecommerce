const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    customer: { 
        type: mongoose.Schema.ObjectId,
        ref: 'Customer'
    },

    items: [
        {
            productId: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            unit_amount: {
                type: Number,
                require: true
            },
            qty:{
                type: Number,
                require: true
            },
        }
    ], 

    total_amount: {
        type: Number,
        require: true
    },

    shipping_details: {
        name: {
            type: String, 
            require: true
        },
        address: { 
            type: String, 
            require: true 
        },
        zip: { 
            type: String, 
            require: true 
        },

        landmark: { 
            type: String, 
            require: true 
        },
        city: { 
            type: String, 
            require: true 
        },
        phone: {
            type: String,
            require: true
        }
    }

}, {timestamps: true})

module.exports = mongoose.model('Order', orderSchema)