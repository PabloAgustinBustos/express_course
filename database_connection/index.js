const express = require("express");
const cors = require("cors");
const pool = require("./db.js");

const app = express();

app.use(cors())
app.use(express.json());

app.get("/contacts", async(req, res) => {
    const { rows, rowCount } = await pool.query("SELECT contacts.id, name, ages.number AS age FROM contacts JOIN ages ON age_id = ages.id");

    res.json({
        success: true,
        lenght: rowCount,
        results: rows
    });
});

app.post("/contacts", async(req, res) => {
    const {name, age} = req.body;

    if(!name || !age){
        return res.json({
            error: true,
            message: "no se recibió nada por body"
        });
    }

    const {rowCount} = await pool.query(`SELECT number FROM ages WHERE number = ${age}`);

    if(rowCount < 1){
        await pool.query(`INSERT INTO ages (number) VALUES (${age})`);
    }

    const {rows} = await pool.query(`SELECT id FROM ages WHERE number = ${age}`);
    const {id} = rows[0];
    const newContact = await pool.query(`INSERT INTO contacts (name, age_id) VALUES ('${name}', ${id})`);

    res.json({
        error: false,
        message: "contacto agregado a la base de datos"
    });
});

app.listen(5000, () => console.log("server listening on 1337"));