const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    customerId: { 
        type: String,
        require: true
    },

    items: [
        {
            productId: {
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
        type: String,
        require: true
    },

    shipping_address: {
        pin: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        locality: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        }
    }

}, {timestamp: true})