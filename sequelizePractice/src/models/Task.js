const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    name: {
        type: DataTypes.STRING
    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timeStamps: false
})

module.exports = Task