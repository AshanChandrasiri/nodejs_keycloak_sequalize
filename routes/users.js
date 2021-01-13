var express = require("express");
var router = express.Router();
import { authorize } from "../security/authorizer";
import { UserService } from "../services/user/UserService";
import { USER_ROLES } from "../shared/constants";

module.exports = () => {
  router.get("/", authorize([USER_ROLES.ROLE_ADMIN]), (req, res, next) => {
    UserService.getCurrentUser(req, res);

    res.send("ADMIN respond with a resource !!!");
  });

  return router;
};
