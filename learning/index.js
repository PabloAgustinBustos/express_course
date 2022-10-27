const express = require("express")
const path = require("path")
const log = require("./middleware/logger")

const app = express()

const products = [
    {
        id: 1,
        name: "pc gamer",
        price: 3100
    },
    {
        id: 2,
        name: "playstation 5",
        price: 2400
    },
    {
        id: 3,
        name: "playstation 4",
        price: 800
    },
    {
        id: 4,
        name: "nintendo switch",
        price: 600
    },
]

const people = [
    {
        id: 1,
        name: "Pablo",
    },
    {
        id: 2,
        name: "Agus",
    },
    {
        id: 3,
        name: "Franco",
    },
    {
        id: 4,
        name: "Oscar",
    },
]

app.use(express.static("./views"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(log)

// app.get("/", (req, res) => {
//     res.json({message: "hola"})
// })

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const {id} = req.params

    const product = products.find(p => parseInt(p.id) === parseInt(id))

    if(!product){
        return res.status(404).json({message: "no encontrado"})
    }

    res.json(product)
})

app.get("/api/v1/query", (req, res) => {
    const {search, limit} = req.query

    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter(p => p.name.startsWith(search))
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)
})

app.get("/api/v1/people", (req, res) => {
    res.json(people)
})

app.post("/login", (req, res) => {
    console.log("hola")
    const {name} = req.body

    if(name){
        return res.status(200).send(name)
    }

    res.send("se recibieron los datos")
})

app.all("*", (req, res) => {
    res.status(404).send("not found")
})

app.listen(3001, () => console.log("server lanzado en puerto 3001"))