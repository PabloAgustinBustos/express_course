require("dotenv").config({path: `${__dirname}/.env`})
require("express-async-errors")

const express = require("express")
const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/error-handler")
const connectDB = require("./db")
const products = require("./routes/products")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>store api</h1><a href='/api/v1/products'>go</a>")
})

app.use("/api/v1/products", products)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, console.log("server lanzado"))
    }catch(e){
        console.log(e)
    }
}

start()