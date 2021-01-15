import { ERROR_RESPONSE } from "../GatewayConstants";

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

const throwNotFoundRequestError = (res, body) => {
  return res.status(404).send(body
    ? { ...ERROR_RESPONSE.NOT_FOUND, body: JSON.stringify(body) }
    : ERROR_RESPONSE.NOT_FOUND);
};

const throwInternalServerErrorRequestError = (res, body) => {
  return res.status(500).send(body
    ? { ...ERROR_RESPONSE.INTERNAL_SERVER_ERROR, body: JSON.stringify(body) }
    : ERROR_RESPONSE.INTERNAL_SERVER_ERROR);
};

export { throwBadRequestError, throwForbiddenRequestError, throwNotFoundRequestError, throwInternalServerErrorRequestError };
