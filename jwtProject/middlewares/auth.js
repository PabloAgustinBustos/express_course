const CustomAPIError = require("../errors/custom-error")
const jwt = require("jsonwebtoken")

const auth = async(req, res, next) => {
    // agarro la cabecera de la petición
    const authHeader = req.headers.authorization

    console.log("se recibió", authHeader)

    // verifico si recibí una cabecera
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        throw new CustomAPIError("no hay ningun token", 401)
    }

    // agarro el token
    const token = authHeader.split(" ")[1]

    try{
        // lo decodifico para agarrar su data
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const {id, username} = decoded

        // me creo un atributo user para pasar los datos
        req.user = {id, username}

        next()
    }catch(e){
        throw new CustomAPIError("no estás autorizado", 401)
    }
}

module.exports = auth