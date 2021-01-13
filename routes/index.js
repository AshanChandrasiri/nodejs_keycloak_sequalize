var express = require("express");
var router = express.Router();



  router.get("/", (req, res, next) => {
    res.send("index respond with a resource !!!");
  });







export { router };
