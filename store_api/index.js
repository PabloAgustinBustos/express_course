const express = require("express")
require("express-async-errors");
const connectDB = require("./db")
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")
const products = require("./routes/products");

require("dotenv").config({
    path:`${__dirname}/.env`
})

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})

app.use("/api/v1/products", products)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, console.log("Server listening on port "+process.env.PORT))
    }catch(error){
        console.log(error)
    }
}

start()