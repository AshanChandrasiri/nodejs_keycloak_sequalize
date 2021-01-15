import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";

const {
  throwNotFoundRequestError,
  throwBadRequestError,
  throwForbiddenRequestError,
  throwInternalServerErrorRequestError,
} = require("./ErrorHandler");

const handleException = (res, error) => {
  if (error instanceof NotFoundException) {
    return throwNotFoundRequestError(res, error.message);
  } else if (error instanceof BadRequestException) {
    return throwBadRequestError(res, error.message);
  } else if (error instanceof ForbiddenException) {
    return throwForbiddenRequestError(res, error.message);
  } else {
    return throwInternalServerErrorRequestError(res, error.message);
  }
};

export { handleException };
