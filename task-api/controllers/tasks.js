module.exports = {
  getAllTasks: (req, res) => {
    res.send("get tasks")
  },

  createTask: (req, res) => {
    res.send("create task")
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