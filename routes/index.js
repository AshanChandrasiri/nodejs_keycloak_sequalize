var express = require("express");
var router = express.Router();
import { UserUniversityService } from "../services/useruniversity/UserUniversityService";

router.get("/index", async (req, res, next) => {
  const result = await UserUniversityService.getAllUserUniDetails();
  // console.log(result)
  res.send("index respond with a resource !!!");
});

export { router };
