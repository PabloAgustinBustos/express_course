// middlewares son funciones que ejecutan durante la request
// tienen acceso a req y res
// 
// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    
    console.log("ejecutando middleware",method, url, time);

    next()
}

module.exports = logger;