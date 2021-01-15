import db from "../../repository/DBContext";
import { TOKEN_ATTRBUTES } from "../../shared/constants";
import { BadRequestException } from "../../shared/exceptionhandler/BadRequestException";
import { NotFoundException } from "../../shared/exceptionhandler/NotFoundException";
import { getAttributesFromToken } from "../../shared/utils/utils";
import MailService from "../mail/MailService";

const createUser = async (req, res) => {
  const userRepository = db.User;

  const requestBody = req.body;

  const checkByUsername = await userRepository.findOne({
    where: { username: requestBody.username },
  });

  if (checkByUsername) {
    throw new BadRequestException("username already exists");
  }

  const checkByEmail = await userRepository.findOne({
    where: { email: requestBody.email },
  });

  if (checkByEmail) {
    throw new BadRequestException("email already exists");
  }

  const { username, email, firstName, lastName, dob } = requestBody;

  const user = {
    username,
    email,
    firstName,
    lastName,
    dob,
  };

  const result = await userRepository.create(user);

  await MailService.sendAccountActivationMail(result);

  return result;
};

const getCurrentUser = async (req, res) => {
  const userRepository = db.User;

  try {
    const username = getAttributesFromToken(req, TOKEN_ATTRBUTES.USERNAME);

    if (!username) {
      throw new BadRequestException("username not found");
    }

    const checkByUsername = await userRepository.findOne({
      where: { username: username },
    });

    if (!checkByUsername) {
      throw new NotFoundException("cannot find record for user in db");
    }

    const roles = getAttributesFromToken(req, TOKEN_ATTRBUTES.CUSTOM_ROLES);

    const response = {
      ...(checkByUsername || {}).dataValues,
      profilePic: checkByUsername.profilePic,
      roles:
        roles?.length > 0 ? roles.filter((item) => item.includes("ROLE_")) : [],
    };

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const UserService = {
  getCurrentUser,
  createUser,
};

export { UserService };
