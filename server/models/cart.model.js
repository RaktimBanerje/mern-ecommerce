const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
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
            categoryId: {
                type: String,
                require: true
            },
            qty:{
                type: Number,
                require: true
            },
            timestamp: {
                type: Date,
                require: true
            }
        }
    ]
})

module.exports = mongoose.model('Cart', cartSchema);