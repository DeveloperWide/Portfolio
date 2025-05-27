const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received Data:", req.body);
  console.log("Parsed:", name, "::", email, "::", message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  return res.status(200).json({
    success: true,
    message: "Message received successfully!",
    data: { name, email, message },
  });
});

module.exports = router;
