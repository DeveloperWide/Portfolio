// models/Newsletter.js
const mongooose = require("mongoose");
const {Schema , model} = mongooose;

const newsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Newsletter = model("Newsletter", newsletterSchema);
module.exports = Newsletter;