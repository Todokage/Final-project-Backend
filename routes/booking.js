import express from "express";
import Booking from "../models/Booking.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(200).json({ message: "Booking successful", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;