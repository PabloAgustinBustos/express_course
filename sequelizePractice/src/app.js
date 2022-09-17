const express = require("express")
const projects = require("./routes/projects.route")

const app = express()

app.use(express.json())

app.use(projects)

module.exports = app