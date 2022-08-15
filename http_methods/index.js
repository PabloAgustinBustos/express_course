const express = require("express");
const cors = require('cors');
const { people } = require("./data");

const app = express();

app.use([cors(), express.json()]);

app.get("/api/people", (req, res) => {
    console.log("el cliente pidió la people")

    res.status(200).json({
        success: true,
        data: people
    })
})

app.post("/api/people", (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, message:"please provide name value"})
    }

    res.status(201).json({success: true, person:{name}});
})

app.post("/login", (req, res) => {
    const {name} = req.body;

    console.log(req.body)

    if(name){
        return res.status(200).send(`welcome ${name}`);
    }

    res.status(401).send("please provide me credentials");
})

app.put("/api/people/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find(person => person.id === Number(id));

    console.log(person);

    if(!person){
        return res.status(404).json({success: false, message: `no person with id ${id}`});
    }

    const newPeople = people.map(person => person.id === Number(id) ? ({...person, name}) : person);

    res.status(200).json({success: true, data: newPeople});
});

app.delete("/api/people/:id", (req, res) => {
    const {id} = req.params;

    const person = people.find(person => person.id === Number(id));

    console.log(person);

    if(!person){
        return res.status(404).json({success: false, message: `no person with id ${id}`});
    }

    const newPeople = people.filter(person => person.id !== Number(id));

    res.status(200).json({success: true, data: newPeople})
})

app.listen(1337, () => {
    console.log("server is listening on port 1337...")
})