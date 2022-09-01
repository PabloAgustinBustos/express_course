const {Router} = require("express")
const { 
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask 
} = require("../controllers/tasks")
const { validateName } = require("../controllers/validators")

const router = Router()

router.get("/", getAllTasks)
router.get("/:id", getTask)
router.post("/", validateName, createTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router