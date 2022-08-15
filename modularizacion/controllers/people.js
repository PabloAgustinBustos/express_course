const { people } = require("../data");

const getPeople = (req, res) => {
    console.log("el cliente pidió la people")

    res.status(200).json({
        success: true,
        data: people
    })
}

const addPerson = (req, res) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success: false, message:"please provide name value"})
    }

    res.status(201).json({success: true, person:{name}});
}

const editPerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find(person => person.id === Number(id));

    console.log(person);

    if(!person){
        return res.status(404).json({success: false, message: `no person with id ${id}`});
    }

    const newPeople = people.map(person => person.id === Number(id) ? ({...person, name}) : person);

    res.status(200).json({success: true, data: newPeople});
}

const deletePerson = (req, res) => {
    const {id} = req.params;

    const person = people.find(person => person.id === Number(id));

    console.log(person);

    if(!person){
        return res.status(404).json({success: false, message: `no person with id ${id}`});
    }

    const newPeople = people.filter(person => person.id !== Number(id));

    res.status(200).json({success: true, data: newPeople})
}

module.exports = {
    getPeople,
    addPerson,
    editPerson,
    deletePerson
}