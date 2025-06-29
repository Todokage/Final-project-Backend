import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendEmail(to, subject, text) {
  await transporter.sendMail({
    from: `"ToDo Travels" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
}