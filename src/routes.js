const express = require("express");

const router = express.Router();
const Country = require("./Country");

router.post("/", Country.store);
router.get("/", Country.show);
router.delete("/", Country.delete);

router.get("/params", (req, res) => {
  res.json({ request: req.query });
});

module.exports = router;
