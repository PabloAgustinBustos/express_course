const express = require("express")
require("express-async-errors")
require("dotenv").config({path: `${__dirname}/.env`})
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")
const routes = require("./routes/main")

const app = express()

app.use(express.static("./public"))
app.use(express.json())

app.use((req, res, next) => {
    console.log("se hizo petición", req.method, req.url)
    next()
})

app.use("/api/v1", routes)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try{
        app.listen(process.env.PORT || 3000, console.log("server lanzado"))
    }catch(e){

    }
}

start()