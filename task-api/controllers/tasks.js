const asyncWrapper = require("../middlewares/async")
const Task = require("../models/Task")

module.exports = {
  getAllTasks: asyncWrapper(async(req, res) => {
    const tasks = await Task.find({}, {name:1, completed: 1})
    res.json({tasks})
  }),

  createTask: asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body)

    return res.status(201).json({
      status: "created",
      task
    })
  }),

  getTask: asyncWrapper(async (req, res) => {
    const {id} = req.params  
  
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
  }),

  updateTask: asyncWrapper(async(req, res) => {
    const {id} = req.params
    
    const task = await Task.findOneAndUpdate(
      {_id: id}, 

      req.body, 

      {
        new: true,
        runValidators: true
      }
    )

    res.status(200).json({
      status: "created",
      task
    })
  }),

  deleteTask: asyncWrapper(async (req, res) => {
    const {id} = req.params

    const task = await Task.findOneAndDelete({_id: id})

    if(!task){
      return res.status(404).json({
        status: "not found"
      })
    }

    res.status(200).json({
      status: "deleted",
      task
    })
  })
}