const express = require("express")
const path = require("path")
const {products} = require("./data")
const logger = require("./middlewares/logger")

const app = express()

app.use(express.static("./public"))
app.use(logger)

app.get("/", (req, res) => {
    const file = path.resolve(__dirname, "./index.html")

    res.sendFile(file)
})

app.get("/api/products", (req, res) => {
    let {search, limit} = req.query
    
    let data = products.map(p => ({id: p.id, name: p.name, image: p.image}))
    
    if(search){
        data = data.filter(p => p.name.startsWith(search))
    }
    
    if(limit){
        data = data.slice(0, Number(limit))
    }
    
    res.json({
        status: "good",
        products: data
    })
})

app.get("/api/products/:id", (req, res) => {
    const {id} = req.params
    
    const data = products.find(p => parseInt(p.id) === parseInt(id))
    
    if(!data){
        return res.status(404).json({
            status: "bad",
            message: "no se encuentra el producto o no existe"
        })
    }
    
    return res.status(200).json({
        status: "good",
        product: {
            id: parseInt(id),
            name: data.name,
            image: data.image
        }
    })
})

// handle all http methods
app.all("*", (req, res) => {
    res.status(404).send("resource not found")
})

app.listen(1337, () => console.log("server running in port 1337"))