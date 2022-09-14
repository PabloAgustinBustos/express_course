const Sequelize = require("sequelize")

const sequelize = new Sequelize("api_rest", "postgres", "13112012pab",{
    host: "localhost",
    dialect: "postgres",
    logging: false
})

module.exports = sequelize