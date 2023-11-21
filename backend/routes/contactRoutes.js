const { addContact } = require("../controllers/contactController");

const router = require("express").Router();

//ADD CONTACT
router.post("/", addContact);

module.exports = router;
