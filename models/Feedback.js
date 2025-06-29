import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Feedback", feedbackSchema);