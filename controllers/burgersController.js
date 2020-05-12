var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //hint: burger.all
});

// post route -> back to index
  //hint: burger.create


// put route -> back to index
  //hint: burger.update()


module.exports = router;
