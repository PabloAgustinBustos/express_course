const router = require("express").Router()
const {login, dashboard} = require("../controllers/main")
const auth = require("../middlewares/auth")

router.route("/dashboard").get(auth, dashboard)
router.route("/login").post(login)

module.exports = router