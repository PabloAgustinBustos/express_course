const Task = require("../models/Task")

module.exports = {
  getAllTasks: async(req, res) => {
    try{
      const tasks = await Task.find({}, {name:1, completed: 1})
  
      res.json({tasks})
    }catch(e){
      res.status(500).json(e)
    }
  },

  createTask: async(req, res) => {
    try{
      const task = await Task.create(req.body)

      res.status(201).json({
        status: "created",
        task
      })
    }catch(e){
      res.status(500).json(e)
    }
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