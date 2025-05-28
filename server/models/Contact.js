// models/Contact.js
const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    responded: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);
module.exports = Contact;