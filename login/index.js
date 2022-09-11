const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded())

app.get("/login", (req, res) => {
    res.sendFile(`${__dirname}/login.html`)
})

app.get("/dashboard", (req, res) => {
    res.sendFile(`${__dirname}/dashboard.html`)
})

app.post("/loginAccount", (req, res) => {
    const {username, password} = req.body
    res.send("login")
})

app.listen(3001, console.log("server listening on 3001"))