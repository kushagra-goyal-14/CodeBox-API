const express = require("express");
const { compileController } = require("../../controller/index");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("successfully made the get request");
});
router.post("/submit", compileController.runCode);

module.exports = router;
