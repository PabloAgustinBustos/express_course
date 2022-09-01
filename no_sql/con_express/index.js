const express = require("express")
const tasksRoutes = require("./routes/tasks")
const connectDB = require("./db/connect")

require("dotenv")
.config({
    path: `${__dirname}/.env`
})

const {MONGO_URI, PORT} = process.env

const app = express()

const startServer = async () => {
    try{
        await connectDB(MONGO_URI)
        app.listen(PORT, console.log("server listening on " + PORT))
    }catch(err){
        console.log({
            message: "Failed to connect to the db...",
            error: err
        })
    }
}

app.use(express.json())

app.use("/api/v1/tasks", tasksRoutes)

startServer()