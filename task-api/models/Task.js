const { Schema, model } = require("mongoose")

const Task = new Schema({
  name: String,
  completed: Boolean
})

module.exports = model("Task", Task)