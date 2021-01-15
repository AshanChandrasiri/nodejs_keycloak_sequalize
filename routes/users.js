var express = require("express");
var router = express.Router();
import { authorize } from "../security/authorizer";
import { UserService } from "../services/user/UserService";
import { USER_ROLES } from "../shared/constants";

module.exports = () => {
  router.get(
    "/",
    authorize([USER_ROLES.ROLE_ADMIN]),
    async (req, res, next) => {
      return UserService.getCurrentUser(req, res);
    }
  );

  router.post(
    "/",
    authorize([USER_ROLES.ROLE_ADMIN]),
    async (req, res, next) => {
      const result = await UserService.createUser(req, res);
      return result;
    }
  );

  return router;
};
