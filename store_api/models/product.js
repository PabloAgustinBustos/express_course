const {model, Schema} = require("mongoose")

module.exports = model("Product", new Schema({
    name: {
        type: String,
        required: [true, "product must be provided"]
    },
    
    price: {
        type: Number,
        required: [true, "product price must be provided"]
    },

    featured: {
        type: Boolean,
        default: false
    },

    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported"
        }
    },

    rating: {
        type: Number,
        default: 4.5
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
}))