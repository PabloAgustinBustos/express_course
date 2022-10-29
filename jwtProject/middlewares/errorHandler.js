const CustomAPIError = require("../errors/custom-error")

const errorHandler = async(err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    
    return res.status(500).send("algo ocurrió mal")
}

module.exports = errorHandler