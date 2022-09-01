const express = require("express")
const tasksRoutes = require("./routes/tasks")
require("./db/connect")
const PORT = 3001

const app = express()

app.use(express.json())

app.use("/api/v1/tasks", tasksRoutes)

app.listen(PORT, console.log("server listening on " + PORT))