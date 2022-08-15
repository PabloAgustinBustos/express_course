const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user === "john"){
        // se está añadindo una propiedad user al req
        req.user = {
            id: 1,
            name: "john"
        }

        next();
    }else{
        return res.status(401).send("unauthorized");
    }
}

module.exports = authorize;