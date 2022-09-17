const { Sequelize, Op } = require('sequelize')
require('dotenv').config({path:`${__dirname}/../.env`})

const userModel = require("./models/User")
const playerModel = require("./models/Player")
const teamModel = require("./models/Team")

const {DB_NAME, USER, PASSWORD, HOST} = process.env

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {host: HOST, dialect: "postgres", logging: false})

userModel(sequelize)
playerModel(sequelize)
teamModel(sequelize)

const {Player, Team} = sequelize.models

Player.belongsToMany(Team, {through: "PlayerTeam"})
Team.belongsToMany(Player, {through: "PlayerTeam"})

module.exports = {
    sequelize,
    ...sequelize.models,
    Op
}