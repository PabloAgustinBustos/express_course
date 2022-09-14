const jwt = require("jsonwebtoken")
const { Unauthenticated } = require("../errors")

const auth = async(req, res, next) => {
    const {authorization} = req.headers

    if(!authorization || !authorization.startsWith("Bearer ")){
        throw new Unauthenticated("No token provided")
    }

    const token = authorization.split(" ")[1]
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const {id, username} = decoded
        
        req.user = {id, username}

        next()
    }catch(error){
        throw new Unauthenticated("Not authorized")
    }
}

module.exports = auth