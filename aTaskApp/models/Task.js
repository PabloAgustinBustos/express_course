const {Schema, model} = require("mongoose")

const Task = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = model("Task", Task)