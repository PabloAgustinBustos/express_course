const {Router} = require("express")
const { 
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask 
} = require("../controllers/tasks")

const router = Router()

router.get("/", getAllTasks)
router.get("/:id", getTask)
router.post("/", createTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router