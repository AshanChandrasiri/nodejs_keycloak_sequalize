import { TOKEN_ATTRBUTES } from "../../shared/constants";
import {getAttributesFromToken} from '../../shared/utils/utils'


const getCurrentUser = (req, res) => {
  try {
    const username = getAttributesFromToken(req, TOKEN_ATTRBUTES.USERNAME);

    console.log("username " + username);
    if (!username) {
    }
  } catch (error) {

    console.log(error)

  }
};

const UserService = {
  getCurrentUser,
};

export { UserService };
