const express = require("express");
const path = require("path");
const {products} = require("./data");

const app = express();

// los archivos estáticos son imágenes o estilos css que no cambian.
// seteo la ubicación de la carpeta con los archivos estáticos
app.use(express.static("./public"))

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, image} = product;

        return {id, name, image}
    })

    res.json(newProducts);
})

app.get("/api/products/:productId", (req, res) => {
    const {productId} = req.params;

    console.log("recibí un param");
    let singleProduct = products.find(p => p.id === parseInt(productId));

    if(singleProduct){
        const {id, name, image} = singleProduct;
    
        singleProduct = {id, name, image};
    
        res.json(singleProduct);
    }else{
        res.status(404).json({message: "no hay nada"});
    }
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    res.send("aaaaa");
});

app.get("/api/v1/query", (req, res) => {
    const {search, limit} = req.query;

    let sortedProducts = [...products];

    if(search){
        let name = search.replace("+", " ");
        sortedProducts = sortedProducts.filter(product => product.name.startsWith(search));
    }
        
    if(limit){
        sortedProducts = sortedProducts.slice(0, parseInt(limit));
    }

    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []})
    }

    return res.status(200).json({success: true, data: [...sortedProducts]});
});

app.get("/page", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

// handle all http methods
app.all("*", (req, res) => {
    res.status(404).send("resource not found");
})

app.listen(1337, () => console.log("server running in port 1337"));