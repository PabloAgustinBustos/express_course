const express = require("express")
const connectDB = require("./db")
const notFound = require("./middlewares/not-found")
const tasks = require("./routes/tasks")

require("dotenv").config({path: `${__dirname}/.env`})

const app = express()

app.use(express.static("./public"))
app.use(express.json())

app.use((req, res, next) => {
    console.log("se hizo petición", req.method, req.url)

    next()
})

app.use("/api/v1/tasks", tasks)

app.use(notFound)

const start = async() => {
    try{
        
        await connectDB(process.env.MONGO_URI)

        console.log("conectada a la base de datos")

        app.listen(process.env.PORT, console.log("server en el puerto " + process.env.PORT))
    }catch(e){
        console.log(e)
    }
}

start()

