const validateName = (req, res, next) => {
    const {name} = req.body

    if(!name){
        return res.status(400).json({
            status: false,
            message: "you have to give me the name of the task"
        })
    }

    next()
}

module.exports={
    validateName
}