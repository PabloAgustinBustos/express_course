function log(req, res, next){
    console.log("se hizo una petición ", req.method)

    next()
}

module.exports = log