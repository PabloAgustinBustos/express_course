const {Schema, SchemaTypes, model} = require("mongoose");

const Story = model("Story", Schema({
    author: {
        type: SchemaTypes.ObjectId,
        ref: "User"
    },
    title: String,
    fans: [{
        type: SchemaTypes.ObjectId, 
        ref: "User"
    }]
}))

const User = model("User", Schema({
    name: String,
    age: Number,
    stories: [{
        type: SchemaTypes.ObjectId,
        ref: "Story"
    }]
}))



module.exports = {
    User,
    Story
}