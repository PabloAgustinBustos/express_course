const {Router} = require("express")
const { getProjects, createProject, updateProject, deleteProject } = require("../controllers/projects.controller")

const router = Router()

router.route("/projects")
.get(getProjects)
.post(createProject)

router.route("/projects/:id")
.put(updateProject)
.delete(deleteProject)
.get((req, res) => {

})

module.exports = router