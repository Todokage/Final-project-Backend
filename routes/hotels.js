import express from "express";
const router = express.Router();

// You can later connect this to MongoDB if you want dynamic hotels
router.get("/", (req, res) => {
  res.json([
    {
      name: "Hotel Adlon Kempinski",
      city: "Berlin",
      price: 3500,
      tags: ["Luxury", "Historic", "Central"],
    },
    {
      name: "25hours Hotel Bikini Berlin",
      city: "Berlin",
      price: 2800,
      tags: ["Hip", "Creative", "Vibrant"],
    },
    // ...add more hotels as needed
  ]);
});

export default router;