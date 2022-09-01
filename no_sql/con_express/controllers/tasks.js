// const Task = require("../models/Task");

const Task = require("../models/Task")

const getAllTasks = async(req, res) => {
    const tasks = await Task.find({}, {__v:0});

    console.log(tasks);

    res.send({
        status: true,
        message: "all good",
        tasks
    })
}

const getTask = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/getTask"
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

const updateTask = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/updateTask"
    })
}

const deleteTask = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/deleteTask"
    })
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}