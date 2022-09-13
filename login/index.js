const express = require("express");
const jwt = require("jsonwebtoken")
require("express-async-errors")
require("dotenv").config({path:`${__dirname}/.env`})

const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/main");

const posts = [
    {
        username: "Kyle",
        title: "Posts 1"
    },

    {
        username: "Jim",
        title: "Posts 2"
    }
]

const app = express();

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded())

app.use("/api/v1", router)

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try{
        app.listen(process.env.PORT, console.log("server listening on 3001"))
    }catch(error){
        console.log(error)
    }
}

start()
