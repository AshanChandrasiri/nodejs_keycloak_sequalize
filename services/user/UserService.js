import db from "../../repository/DBContext";
import { TOKEN_ATTRBUTES } from "../../shared/constants";
import {
  throwBadRequestError,
  throwInternalServerErrorRequestError,
  throwNotFoundRequestError,
} from "../../shared/ErrorHandler";
import { getAttributesFromToken } from "../../shared/utils/utils";
import MailService from "../MailService";

const createUser = async (req, res) => {
  const userRepository = db.User;

  const requestBody = req.body;

  const checkByUsername = await userRepository.findOne({
    where: { username: requestBody.username },
  });

  if (checkByUsername) {
    return throwBadRequestError(res, { message: "username already exists" });
  }

  const checkByEmail = await userRepository.findOne({
    where: { email: requestBody.email },
  });

  if (checkByEmail) {
    return throwBadRequestError(res, { message: "email already exists" });
  }

  const user = {
    username: requestBody.username,
    email: requestBody.email,
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    dob: requestBody.dob,
  };

  const result = await userRepository.create(user);

  await MailService.sendAccountActivationMail(result);

  return res.status(200).send(result);
};

const getCurrentUser = async (req, res) => {
  const userRepository = db.User;

  try {
    const username = getAttributesFromToken(req, TOKEN_ATTRBUTES.USERNAME);

    if (!username) {
      return throwBadRequestError(res, { message: "username not found" });
    }

    const checkByUsername = await userRepository.findOne({
      where: { username: username },
    });

    if (!checkByUsername) {
      return throwNotFoundRequestError(res, {
        message: "cannot find record for user in db",
      });
    }

    return res.status(200).send(checkByUsername);
  } catch (error) {
    console.log(error);
    return throwInternalServerErrorRequestError(res);
  }
};

const UserService = {
  getCurrentUser,
  createUser,
};

export { UserService };
