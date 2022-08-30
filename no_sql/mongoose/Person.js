const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
    street: mongoose.SchemaTypes.String,
    city: mongoose.SchemaTypes.String
})

const personSchema = new mongoose.Schema({
    name: mongoose.SchemaTypes.String,
    age: {
        type: mongoose.SchemaTypes.Number,
        min: 0,
        max: 100,
        validate: {
            validator: v => v>=18,
            message: props => `${props.value} es menor a 18`
        }
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        inmutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: mongoose.SchemaTypes.Date,
        inmutable: true,
        default: () => Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Person"
    },
    hobbies: [mongoose.SchemaTypes.String],
    address: adressSchema
});

// no podemos usar array funcition para crear métodos a cáda documento
personSchema.methods.sayHi = function(){
    console.log("hola mi nombre es", this.name);
}

// métodos estáticos del modelo
personSchema.statics.findByName = function(name){
    return this.findOne({name})
}

// puedo añadir queries
personSchema.query.byName = function(name){
    return this.where({name})
}

personSchema.pre("save", (next) => {
    console.log("se va a guardar una persona");
    next();
})

module.exports = mongoose.model("Person", personSchema);