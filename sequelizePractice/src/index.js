require("dotenv").config({path:`${__dirname}/../.env`})
const app = require("./app")
const sequelize = require("./db")

const Project = require("./models/Project")
const Task = require("./models/Task.js")

Project.hasMany(Task)
Task.belongsTo(Project)

const start = async() => {
    try{        
        // trata de hacer una sincronización con la base de datos, para crear tablas, etc
        await sequelize.sync({force: false})

        // sync() -> crea las tablas si no existen
        // sync({force: true}) -> sobreescribe las tablas
        // sync({alter: true}) -> revisa si hay algo en la tabla y trata de añadirlo sin recrearla

        app.listen(process.env.PORT, console.log("server listening on " + process.env.PORT))
    }catch(error){
        console.log(error)
    }
}

start()