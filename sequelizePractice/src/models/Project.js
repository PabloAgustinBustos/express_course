const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Project = sequelize.define("Project", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    name: {
        type: DataTypes.STRING
    },

    priority: {
        type: DataTypes.INTEGER
    },

    description: {
        type: DataTypes.STRING
    }
}, {
    timeStamps: false
})

// Project.hasMany(Task, {
//     foreignKey: "projectId",
//     sourceKey: "id"
// })

// Task.belongsTo(Project, {
//     foreignKey: "projectId",
//     targetId: "id"
// })

module.exports = Project