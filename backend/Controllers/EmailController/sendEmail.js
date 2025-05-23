import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aritra.chakraborty203@gmail.com",
      subject: "Admission",
      html: `
      <h2>New Query</h2>
      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Message:</strong> ${message}</p>
   
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
