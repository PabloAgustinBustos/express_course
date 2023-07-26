const Task = require("../models/Task")

module.exports = {
  getAllTasks: async(req, res) => {
    res.send("get tasks")
  },

  createTask: async(req, res) => {
    const task = await Task.create(req.body)
    
    res.status(201).json({
      status: "created",
      task
    })
  },

  getTask: (req, res) => {
    res.send("get task")
  },

  updateTask: (req, res) => {
    res.send("update task")
  },

  deleteTask: (req, res) => {
    res.send("delete task")
  }
}