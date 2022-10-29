const express = require("express")
const {login, dashboard} = require("../controllers/main")
const auth = require("../middlewares/auth")

const router = express.Router()

router.route("/dashboard").get(auth, dashboard)
router.route("/login").post(login)

module.exports = router