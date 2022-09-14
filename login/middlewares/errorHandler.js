const CustomAPIError = require("../errors/custom-error")
const {StatusCodes} = require("http-status-codes")

const errorHandlerMiddleware = (error, req, res, next) => {
    if(error instanceof CustomAPIError){
        return res.status(error.statusCode).json({msg: error.message})
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("something went wrong")
}

module.exports = errorHandlerMiddleware