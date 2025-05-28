import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let temp = {};
    if (!formData.name) temp.name = "Name is required";
    if (!formData.email) temp.email = "Email is required";
    if (!formData.message) temp.message = "Message is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_PATH}/user/register`,
        formData
      );
      Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "Cool",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }} className="m-10">
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Get in Touch
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box
          component="form"
          onSubmit={onSubmitHandler}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={onChangeHandler}
            error={!!errors.message}
            helperText={
              errors.message || "Max 1000 characters. We reply within 1–2 business days."
            }
            inputProps={{ maxLength: 1000 }}
          />
          <Box mt={2} textAlign="right">
            <Button variant="contained" type="submit" color="primary">
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Contact;
