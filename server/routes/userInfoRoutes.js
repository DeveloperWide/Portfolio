const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/register", async (req, res) => {
  let allMessages = await Contact.find();
  let { name, email, message } = req.body;
  if (!name, !email, !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }
  let existingUser = allMessages.find((obj) => {
    return obj.email === email;
  });

  console.log(existingUser)

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "You already messaged"
    })
  }

  let newUser = new Contact({
    ...req.body
  });

  let svdUser = await newUser.save();
  console.log(svdUser)
  return res.status(200).json({
    success: true,
    message: "Successfully Submitted",
    data: newUser
  })
});


router.post("/email" , (req, res) => {
  res.status(200).json({
    success: true,
    message: "You're in"
  })
})

module.exports = router;
