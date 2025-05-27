import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/user/register/", formData);
      console.log(res);
      setStatusMessage("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-4xl py-5 font-bold text-gray-900 ms-20">
        Get in Touch
      </h2>

      {statusMessage && (
        <div className="text-center text-sm mb-4 font-semibold text-green-600">
          {statusMessage}
        </div>
      )}

      <form
        onSubmit={onSubmitHandler}
        className="max-w-[80%] mx-auto space-y-6 p-6 bg-white shadow-lg rounded-xl"
      >
        {/* Name Field */}
        <div className="flex flex-col gap-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            required
            className="h-10 rounded-md px-3 border text-gray-900 border-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-y-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
            className="h-10 border rounded-md px-3 text-gray-900 border-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-y-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChangeHandler}
            rows="5"
            maxLength={1000}
            required
            className="resize-y rounded-md px-3 py-2 text-gray-900 border border-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here..."
          />
          <p className="text-sm text-gray-400">
            Max 1000 characters. We usually reply within 1–2 business days.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
