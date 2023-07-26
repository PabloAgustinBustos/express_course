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

      return res.status(201).json({
        status: "created",
        task
      })
    }catch(e){
      return res.status(500).json(e)
    }
  },

  getTask: async (req, res) => {
    const {id} = req.params
    
    try{
      const task = await Task.findOne({_id: id}, {name:1, completed: 1})
      
      if(!task){
        return res.status(404).json({
          status: "not found"
        })
      }

      return res.status(200).json({
        status: "found",
        task
      })
    }catch(e){
      return res.status(500).json(e)
    }
  },

  updateTask: (req, res) => {
    res.send("update task")
  },

  deleteTask: (req, res) => {
    res.send("delete task")
  }
}