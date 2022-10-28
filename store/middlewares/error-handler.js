const errorHandlerMiddleware = async(err, req, res, next) => {
    return res.status(500).json({msg: "algo malo ocurrió, intentar de nuevo"})
}

module.exports = errorHandlerMiddleware