const mongoose = require("mongoose")
const connectionString = "mongodb+srv://Pablo:PabloMongo2022@nodeexpressprojects.xrz8qbb.mongodb.net/taskManager?retryWrites=true&w=majority"

mongoose.connect(connectionString)
.then(() => console.log("connected to the db..."))
.catch(err => console.log({
    message: "Failed to connect to the db...",
    error: err
}))