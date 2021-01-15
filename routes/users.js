var express = require("express");
var router = express.Router();
import { authorize } from "../security/authorizer";
import { UserService } from "../services/user/UserService";
import { USER_ROLES } from "../shared/constants";
import { handleException } from "../shared/exceptionhandler/GlobalExceptionHandler";

module.exports = () => {
  router.get(
    "/",
    authorize([USER_ROLES.ROLE_ADMIN]),
    async (req, res, next) => {
      try {
        const result = await UserService.getCurrentUser(req, res);
        return res.status(200).send(result);
      } catch (error) {
        return handleException(res, error);
      }
    }
  );

  router.post(
    "/",
    authorize([USER_ROLES.ROLE_ADMIN]),
    async (req, res, next) => {
      try {
        const result = await UserService.createUser(req, res);
        return res.status(200).send(result);
      } catch (error) {
        return handleException(res, error);
      }
    }
  );

  return router;
};
