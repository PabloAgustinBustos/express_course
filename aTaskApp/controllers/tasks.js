const Task = require("../models/Task")
const asyncWrapper = require("../middlewares/async")


const getAllTasks = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const createTask = asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({message: "created", task})
})

const getTask = asyncWrapper(async(req, res) => {
    const {id: _id} = req.params

    const task = await Task.findOne({_id})

    if(!task){
        return res.status(404).json({message: "no hay un id en los params"})
    }

    res.status(200).json({task})
})

const updateTask = asyncWrapper(async(req, res) => {
    const {id: _id} = req.params

    const task = await Task.findOneAndUpdate({_id}, req.body, {
        new:true,
        runValidators: true
    })

    if(!task){
        return res.status(404).json({message: "no se encontró un elemento con ese id"})
    }

    res.status(200).json({id: _id, data: req.body})
})

const deleteTask = asyncWrapper(async(req, res) => {
    const {id: _id} = req.params

    const task = await Task.findOneAndDelete({_id})

    if(!task){
        return res.status(404).json({message: "no se encontró un elemento con ese id"})
    }

    res.status(200).json({task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}