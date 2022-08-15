const express = require("express");
const morgan = require("morgan");
const authorize = require("./authorize");
const logger = require("./logger");

const app = express();

// se invoca en todas las rutas automaticamente
// app.use([logger, authorize]);

app.use(morgan("tiny"));


app.get("/", (req, res) => {
    console.log(req.user)
    res.send("home")
})

app.get("/about", (req, res) => {
    res.send("about")
})
app.get("/api/products", (req, res) => {
    res.send("products")
})
app.get("/api/items", [logger, authorize], (req, res) => {
    res.send("items")
})

app.listen(1337, () => {
    console.log("server is listening on port 1337...")
})