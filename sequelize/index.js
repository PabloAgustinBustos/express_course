const { sequelize } = require("./src/db");
const app = require("./src/app")

const start = async() => {
    try{
        await sequelize.sync({force: true})

        // inicio del server
        app.listen(process.env.SERVER_PORT, console.log("server listening on PORT " + process.env.SERVER_PORT))
    }catch(error){
        console.log("ocurrió un error", error)
    }
}

start()