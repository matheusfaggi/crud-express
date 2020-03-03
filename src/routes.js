const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.post("/", (req, res) => {
  res.json({ request: req.body });
});

router.get("/params", (req, res) => {
  res.json({ request: req.query });
});

module.exports = router;
