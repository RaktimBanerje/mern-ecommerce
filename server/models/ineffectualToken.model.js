const mongoose = require('mongoose')

const ineffectualTokenSchema = mongoose.Schema({
    signature: {
        type: String,
        require: true,
        unique: true
    }, 
    exp: {
        type: Date,
        require: true
    }
}, {timestamp: true})

module.exports = mongoose.model('IneffectualToken', ineffectualTokenSchema)