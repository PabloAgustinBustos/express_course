const jwt = require("jsonwebtoken")
const { BadRequest } = require("../errors")

const login = async(req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        throw new BadRequest("proivde email and password", 400)
    }

    const id = new Date().getTime()

    // buena practica dejar el payload small
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:"30d"})

    res.status(200).json({
        msg: "user created",
        token
    })
}

const dashboard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        msg: `hello, ${req.user.username}`, 
        secret: `here is your authorized data: ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}