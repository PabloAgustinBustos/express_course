const express = require("express")
const {getAllTasks, createTask, getTask, deleteTask, updateTask} = require("../controllers/tasks")

const app = express.Router()

app.route("/")
.get(getAllTasks)
.post(createTask)

app.route("/:id")
.get(getTask)
.patch(updateTask)
.delete(deleteTask)

module.exports = app