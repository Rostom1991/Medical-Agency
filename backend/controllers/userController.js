const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

const signup = async (req, res) => {
  const { email, password, phone } = req.body;
  if (!email || !password || !phone) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "Email already used!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      phone,
    });
    const token = createToken(newUser._id);
    if (!newUser) {
      return res.status(400).json({ error: "Signup Error" });
    }
    res.status(201).json({ message: "Signup Successful!", newUser, token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Some field are empty!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "This user doesn't have an account, try to signup first!",
      });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ error: "Wrong password!" });
    }
    const token = createToken(user._id);
    res.status(200).json({ message: "Login successful!", user, token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { signup, login };
