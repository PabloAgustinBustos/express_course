const express = require("express")
const { getAllTasks } = require("../controllers/tasks")
const router = express.Router()

router.route("/tasks").get(getAllTasks)

module.exports = router