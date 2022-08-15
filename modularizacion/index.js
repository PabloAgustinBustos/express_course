const express = require("express");
const cors = require('cors');
const peopleRoutes = require("./routes/people.js");
const authRoutes = require("./routes/auth.js");

const app = express();

app.use([cors(), express.json()]);

app.use("/api/people", peopleRoutes)
app.use("/login", authRoutes);

app.listen(1337, () => {
    console.log("server is listening on port 1337...")
})