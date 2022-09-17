const checkBody = (req, res, next) => {
    if(req.url === "/players"){
        const {firstName, lastName, age, city, userName} = req.body
    
        if(!firstName || !lastName || !age || !city){
            return res.status(400).json({
                success: false,
                message: "faltan datos en el body"
            })
        }
    }else if(req.url === "/teams"){
        const {name} = req.body
        if(!name){
            return res.status(400).json({
                success: false,
                message: "faltan datos en el body"
            })
        }
    }

    next()
}

module.exports = checkBody