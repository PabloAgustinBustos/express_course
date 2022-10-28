const product = require("../model/product")

const getAllProductsStatic = async(req, res) => {
    const products = await product.find({
        featured: true,
        company: "caressa"
    })
    res.status(200).json({amount: products.length, products})
}

const getAllProducts = async(req, res) => {
    // const {featured, name, orderBy, fields, minPrice, maxPrice} = req.query



    res.status(200).json({msg: "products"})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}