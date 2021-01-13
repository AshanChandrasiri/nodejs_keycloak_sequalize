import { ERROR_RESPONSE } from "./GatewayConstants";

const throwBadRequestError = (res, body) => {
  return res.status(400).send(body
    ? { ...ERROR_RESPONSE.BAD_REQUEST, body: JSON.stringify(body) }
    : ERROR_RESPONSE.BAD_REQUEST);
};

const throwForbiddenRequestError = (res, body) => {
  return res.status(403).send(body
    ? { ...ERROR_RESPONSE.FORBIDDEN, body: JSON.stringify(body) }
    : ERROR_RESPONSE.FORBIDDEN);
};

export { throwBadRequestError, throwForbiddenRequestError };
