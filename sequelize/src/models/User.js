const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING
    },

    lastName: {
        type: DataTypes.STRING
    }
})