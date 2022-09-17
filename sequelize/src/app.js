const express = require("express")
const {Player, Op, Team} = require("./db")
const checkBody = require("./middlewares/checkBody")

const app = express()

app.use(express.json())

app.get("/players", async(req, res) => {
    const attributes = req.query.atts?.split("-") || []
    let players = []

    console.log("attributes", attributes)

    try{
        if(attributes.length > 0){
            console.log("hay atributos, los voy a ejecutar")
            players = await Player.findAll({attributes})
        }else{
            console.log("no hay atributos")
            players = await Player.findAll()
        }

        console.log(players)
    }catch(error){
        console.log("error:",error)
        return res.status(500).json({
            success:false,
            error
        })
    }

    res.status(200).json({
        success:true,
        players
    })
})

app.post("/players", checkBody, async(req, res) => {
    const {firstName, lastName, age, city, userName} = req.body
    let newPlayer = {}

    try{
        newPlayer = await Player.create({
            firstName,
            lastName,
            userName,
            age,
            city
        })

        console.log(newPlayer.id)
    }catch(error){
        console.log("hay un error en POST /players")

        return res.status(500).json({
            success: false,
            error
        })
    }    

    res.status(200).json({
        success: true,
        newPlayer
    })
})

app.post("/teams", checkBody, async(req, res) => {
    const {name} = req.body
    let newTeam = {}

    try{
        newTeam = await Team.create({
            name
        })
    }catch(error){
        console.log(error)

        return res.status(500).json({
            success: false,
            error
        })
    }  
    
    res.status(200).json({
        success: true,
        newTeam
    })
})

app.delete("/players/:id", async(req, res) => {
    const {id} = req.params

    const player = await Player.findByPk(id)

    await player.destroy()

    res.status(200).json({
        success: true,
        deleted: player
    })
})

module.exports = app