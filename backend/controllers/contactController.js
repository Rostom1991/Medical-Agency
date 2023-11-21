const Contact = require("../models/contactModel");
const validator = require("validator");

const addContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const contact = await Contact.create({ name, email, phone, message });
    if (!contact) {
      return res.status(400).json({ error: "Message Not Sent!" });
    }
    res.status(201).json({ message: "Thank You For Contacting Us!" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { addContact };
