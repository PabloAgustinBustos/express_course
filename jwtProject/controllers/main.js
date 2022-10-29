const CustomAPIError = require("../errors/custom-error")
const jwt = require("jsonwebtoken")

const login = async(req, res) => {
    const {username, password} = req.body
    
    if(!username || !password){
        throw new CustomAPIError("faltan los datos", 400)
    }

    // solo es demo, normalmente se provee de la base de datos
    const id = new Date().getDate()

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "30d"})

    res.status(200).json({msg: "user created", token})
}

const dashboard = async(req, res) => {
    // const {username, id} = req.user

    // const luckyNumber = Math.floor(Math.random()*100)
    
    // res.status(200).json({msg: `hello ${username}`, luckyNumber})

    console.log(req.user)
    res.status(200).json({user: req.user})
}

module.exports = {
    login,
    dashboard
}