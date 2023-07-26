const express = require("express")
const tasks = require("./routes/tasks.routes")

require("dotenv")
.config({
  path: `${__dirname}/.env`,
})

const connectDB = require("./db")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>endpoints</title>
      </head>

      <body>
        <ul>
          <li>GET /api/v1/tasks</li>
          <li>POST /api/v1/tasks</li>
          <li>GET /api/v1/tasks/:id</li>
          <li>PATCH /api/v1/tasks/:id</li>
          <li>DELETE /api/v1/tasks/:id</li>
        </ul>
      </body>
    </html>
  `)
})

app.use("/api/v1", tasks)

connectDB(process.env.MONGO_URI)
.then(() => {
  console.log("DB connected")
  
  const port = process.env.PORT || 3001
  app.listen(port, () => console.log("server listening on port " + port))
}).catch(e => console.log(e))
