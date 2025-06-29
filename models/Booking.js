import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkIn: String,
  checkOut: String,
  guests: Number,
  hotel: String,
  total: Number,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Booking", bookingSchema);