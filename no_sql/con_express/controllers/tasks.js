const getAllTasks = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/getTasks"
    })
}

const getTask = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/getTask"
    })
}

const createTask = (req, res) => {
    res.send({
        status: true,
        message: "good request",
        route: "/createTasks"
    })
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