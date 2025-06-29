import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/booking.js"; // <-- fixed import
import feedbackRoutes from "./routes/feedback.js";
import hotelRoutes from "./routes/hotels.js";
import mpesaRoutes from "./routes/mpesa.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/mpesa", mpesaRoutes);

app.get("/", (req, res) => {
  res.send("API is running!");
});
// Email endpoint (optional, for booking confirmation)
import sendEmail from "./utils/sendEmail.js";
app.post("/api/email/booking", async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await sendEmail(to, subject, text);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));