const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        require: true 
    },
    email: { 
        type: String, 
        require: true 
    },
    phone:{ 
        type: String,
    },
    password: { 
        type: String, 
        require: true 
    },
    address: {
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
        }
    }
})

module.exports = mongoose.model('Customer', userSchema)