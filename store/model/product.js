const {Schema, model} = require("mongoose")

const product = new Schema({
    name: {
        type: String,
        required: [true, "el nombre del producto debe ser dado"]
    },

    price: {
        type: Number,
        required: [true, "el precio debe ser seteado"]
    },

    featured: {
        type: Boolean,
        default: false
    },

    rating: {
        type: Number,
        default: 4.5
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
    
    
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: '{VALUE} no es válido'
        },
    },
})

module.exports = model("products", product)