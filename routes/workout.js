const express = require("express");

const router = express.Router();
// get all workouts
router.get("/", (req, res) => {
  res.json({ pesan: "ini gel all workout" });
});
// get a single workout
router.get("/:id", (req, res) => {
  res.json({ pesan: "get single workout" });
});
// ppost a new workout
router.post("/", (req, res) => {
  // req.body
  res.json({ pesan: "Post a new workout" });
});
// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ pesan: "delete a workout" });
});
// update a workout
router.patch("/:id", (req, res) => {
  res.json({ pesan: "update a new workout" });
});

module.exports = router;
