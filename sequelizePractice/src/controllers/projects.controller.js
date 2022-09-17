const Project = require("../models/Project")

const getProjects = async(req, res) => {
    try{
        let projects = await Project.findAll()
        projects = projects.map(p => p.dataValues)
    
        res.json({
            success: true,
            projects
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "error interno"
        })
    }
}

const createProject = async(req, res) => {
    const {name, priority, description} = req.body

    const newProject = await Project.create({
        name,
        priority,
        description
    })

    res.json({
        success: true,
        newProject
    })
}

const updateProject = async(req, res) => {
    const {id} = req.params
    const newTask = req.body

    try{
        const project = await Project.findByPK(id)
        

        res.sendStatus(204)
    }catch(error){
        res.status(400).json({
            success: false,
            message: "no se pudo eliminar"
        })
    }

    res.send("good")
}

const deleteProject = async(req, res) => {
    const {id} = req.params

    try{
        await Project.destroy({
            where: {
                id
            }
        })

        res.sendStatus(204)
    }catch(error){
        res.status(400).json({
            success: false,
            message: "no se pudo eliminar"
        })
    }
}

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}