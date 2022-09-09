const Product = require("../models/product")

const getAllProductsStatic = async(req, res) => {
    // res.status(200).json({
    //     msg: "products testing route"
    // })
    throw new Error("Erroooooooooor!!!!!!!!!")
}

const getAllProducts = async(req, res) => {
    const products = await Product.find()

    res.status(200).json({
        msg: "all products",
        products
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}