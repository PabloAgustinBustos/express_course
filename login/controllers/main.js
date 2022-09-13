const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")

const login = async(req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        throw new CustomAPIError("proivde email and password", 400)
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
    const {authorization} = req.headers

    if(!authorization || !authorization.startsWith("Bearer ")){
        throw new CustomAPIError("No token provided", 401)
    }

    const token = authorization.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const luckyNumber = Math.floor(Math.random() * 100)

        res.status(200).json({
            msg: `hello, ${decoded.username}`, 
            secret: `here is your authorized data: ${luckyNumber}`
        })
    }catch(error){
        throw new CustomAPIError("Not authorized", 401)
    }
}

module.exports = {
    login,
    dashboard
}