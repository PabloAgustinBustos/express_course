const express = require("express");

const app = express();

// handle all http methods
app.all("*", (req, res) => {
    res.status(404).send("resource not found");
})

app.listen(1337, () => console.log("server running in port 1337"));