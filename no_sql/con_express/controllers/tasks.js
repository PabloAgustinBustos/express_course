// const Task = require("../models/Task");

const Task = require("../models/Task")

const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({}, {__v:0})
        
        res.status(200).json({
            status: true,
            message: "all good",
            amount: tasks.length,
            tasks
        })
    }catch(error){
        res.status(500).json({
            status: false,
            message: "an error",
            error
        })
    }
}

const getTask = async(req, res) => {
    const {id} = req.params
    let task = undefined
    
    try{
        task = await Task.findOne({_id:id}, {__v:0})
    }catch(error){
        return res.status(404).json({
            status: false,
            message: "task not found",
            error
        })
    }
    
    res.json({
        status: true,
        message: "good request",
        task
    })
}

const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body)

        res.status(201).send({
            status: true,
            message: "task created",
            newTask: task
        })
    }catch(error){
        res.status(500).json({
            status: false,
            message: "you have to give me the name of the task",
            error
        })
    }

}

const updateTask = async(req, res) => {
    try{
        const {id} = req.params;

        const task = await Task.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        });

        if(!task){
            return res.status(404).json({
                status: false,
                message: "Task not found"
            })
        }

        res.status(200).json({id, newTask: req.body})
    }catch(error){
        res.status(500).json({
            status: false,
            message: "internal error"
        })
    }
}

const deleteTask = async(req, res) => {
    const {id} = req.params
    let deletedTask = null

    try{
        await Task.deleteOne({_id:id})
    }catch(error){
        return res.status(404).json({
            status: false,
            message: "task not found",
            error
        })
    }
    
    res.status(200).json({
        status: true,
        message: "task deleted"
    })
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}