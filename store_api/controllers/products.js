const Product = require("../models/product")

const getAllProductsStatic = async(req, res) => {
    // res.status(200).json({
    //     msg: "products testing route"
    // })
    throw new Error("Erroooooooooor!!!!!!!!!")
}

const getAllProducts = async(req, res) => {
    const {featured, name, orderBy, fields, minPrice, maxPrice} = req.query
    let queryObject = {}
    let products = []
    let priceRange = {}

    // 1-filtros
    if(featured){
        queryObject.featured = featured
    }

    if(name){
        queryObject.name = {
            $regex: name, 
            $options: "i"
        }
    }

    if(minPrice || maxPrice){      
        priceRange = {
            $gte: minPrice ? minPrice : 0,
            $lte: maxPrice ? maxPrice : 1000000000000000
        }

        queryObject.price = priceRange
    }

    let result = Product.find(queryObject)

    // 2-orders
    if(orderBy){
        const atts = orderBy.split(",").join(" ")
        result = result.sort(atts)
    }else{
        result = result.sort("createdAt")
    }

    if(fields){
        const atts = fields.split(",").join(" ")
        result = result.select(atts)
    }

    // 3-pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    products = await result.skip(skip).limit(limit)

    res.status(200).json({
        msg: "all products",
        amount: products.length,
        products
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}