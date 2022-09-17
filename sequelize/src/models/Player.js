const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define("Player", {
    firstName: {
        type: DataTypes.STRING
    },

    lastName: {
        type: DataTypes.STRING
    },
    
    fullName: {
        type: DataTypes.VIRTUAL,

        get(){
            return `${this.firstName} ${this.lastName}`
        } 
    },

    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    birthDay: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },

    age:{
        type: DataTypes.INTEGER,
        
        validate:{
            min: 18,
            max: 55
        },

        get(){
            return `${this.firstName} tiene ${this.getDataValue("age")} años`
        }
    },

    city: {
        type: DataTypes.ENUM("Colombia", "Uruguay", "Argentina")
    }
}, {
    timestamps: false
})