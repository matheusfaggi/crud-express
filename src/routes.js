const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/", (req, res) => {
  res.json({ request: req.body });
});

module.exports = router;
