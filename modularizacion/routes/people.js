const express = require("express");
const { getPeople, addPeople, editPeople, addPerson, editPerson, deletePerson } = require("../controllers/people");
const router = express.Router();


router.get("/", getPeople)

router.post("/", addPerson)

router.put("/:id", editPerson);

router.delete("/:id", deletePerson)

module.exports = router;