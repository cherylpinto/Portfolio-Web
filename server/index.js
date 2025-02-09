
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your app password
  },
  tls: {
    rejectUnauthorized: false, // This is sometimes needed for Gmail
  },
});

app.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body; // Removed `name`

  try {
    console.log("Received contact request:", req.body);
    const info = await transporter.sendMail({
     from: `${email} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Message: ${message}`, // Removed `Name:`
      replyTo: email,
    });

    res.json({ success: true, message: "Email sent successfully!", info });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
