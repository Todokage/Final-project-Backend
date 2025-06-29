import express from "express";
import Feedback from "../models/Feedback.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.status(200).json({ message: "Feedback received", feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;