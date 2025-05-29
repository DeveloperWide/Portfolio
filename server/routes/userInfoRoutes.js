const express = require("express");
const Contact = require("../models/Contact");
const Newsletter = require("../models/Newsletter");
const router = express.Router();

router.get("/messages", async (req, res) => {
  try {
    let allMessages = await Contact.find();
    res.status(200).json({
      success: true,
      message: "All Your messages",
      data: allMessages
    })
  } catch (er) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
})

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


router.post("/email", async (req, res) => {
  try {
    let { email } = req.body;
    let allEmailList = await Newsletter.find();
    let existingEmail = allEmailList.find((obj) => {
      return obj.email === email;
    });

    if (existingEmail) {
      return res.status(400).json({
        success: true,
        message: "Email already exist"
      })
    }

    let newEmail = new Newsletter({
      email
    });

    let svdEmail = await newEmail.save();
    console.log(svdEmail);

    return res.status(200).json({
      success: true,
      message: "Subscribed"
    })

  } catch (er) {
    res.status(500).json({
      success: false,
      message: "ERROR: Email not submitted"
    })
  }
});

// Update User
router.patch("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let user = await Contact.findById(id);
    user.responded = true;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Successfully Removed",
      data: user
    })
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "ERROR: Unknown Error...",
    })
  }

});

// Get all Emails
router.get("/emails", async (req, res) => {
  try {
    let emails = await Newsletter.find();
    return res.status(200).json({
      success: true,
      message: "All emails",
      data: emails
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "ERROR: Server Error",
    })
  }
})

module.exports = router;
