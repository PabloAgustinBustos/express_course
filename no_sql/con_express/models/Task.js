const {Schema, model} = require("mongoose");

module.exports = model("Task", new Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20, "name can not be bore than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
}))