const mongoose = require("mongoose");
const Person = require("./Person");
const {User, Story} = require("./User");

// conexión a la base de datos
mongoose.connect("mongodb://localhost/appdb", () => console.log("conectado"));

// crear registro y guardarlo
async function createUser1(){
    const person = new Person({
        name: "Kevin", 
        age: 26,
        email: "kevin@gmail.com",
        hobbies: ["programar", "jugar", "correr"],
        address: {
            street: "Main St"
        }
    });
    
    await person.save();
}

async function createUser2(){
    // otro método
    const person = await Person.create({
        name: "Juana",
        age: 32,
        note: "hola"
    });

    console.log(person)
}

async function createUser3(data){
    await Person.create(data);
}

async function selectingAll(){
    const people = await Person.find({age:{$lt: 20}}, {name:1,age:1, _id:0   });

    console.log("people",people);
}

async function selectingOneWhere(){
    const people = await Person.findOne({age:{$gt: 20}}, {name:1,age:1, _id:0   });

    console.log("people",people);
}

async function selectIfExists(){
    const res = await Person.exists({name: "Juana"});

    console.log(res);
}

async function updateUser(){
    const person = await Person.findById("630d3d4357de66d6b1d73471");
    
    person.age = 25;

    await person.save();
}

async function createUser(name){
    await Person.create({
        name,
        age: 21,
        email: "pab@gmail.com"
    })
}

async function addStory(content, userName){
    const user = await User.findOne({name: userName});

    const story = new Story({
        author: user._id,
        title: content
    })

    await story.save();

    await user.update({$push: {stories: story}});
}

async function findWithJoin(){
    const user = await Person.findOne({name: "Pablo"});
    user.sayHi();

    const user2 = await Person.findByName("Franco");
    console.log(user2);

    const user3 = await Person.find().byName("Oscar");
    console.log(user3);
}

