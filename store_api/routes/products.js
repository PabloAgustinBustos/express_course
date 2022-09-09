const {Router} = require("express")
const { getAllProductsStatic, getAllProducts } = require("../controllers/products")

const router = Router()

router.get("/", getAllProducts)
router.get("/static", getAllProductsStatic)

module.exports = router