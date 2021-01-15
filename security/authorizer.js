import {
  throwBadRequestError,
  throwForbiddenRequestError,
} from "../shared/exceptionhandler/ErrorHandler";

const authorize = (roles) => {
  return (req, res, next) => {
    try {
      if (
        !req ||
        !req.kauth ||
        !req.kauth.grant ||
        !req.kauth.grant.access_token.content.custom_roles
      ) {
        return throwBadRequestError(res, {
          message: "cannot find valid token in the headers",
        });
      }
    } catch (error) {
      return throwBadRequestError(res, {
        message: "token decode error. invalid token",
      });
    }

    if (!roles) {
      return next();
    }

    const tokenRoles = req.kauth.grant.access_token.content.custom_roles;

    if (roles && roles.length > 0) {
      for (const tokenRole in tokenRoles) {
        for (const authorizedRole in roles) {
          if (tokenRole === authorizedRole) {
            return next();
          }
        }
      }
    }

    return throwForbiddenRequestError(res, {
      message: "user has no permission to access this route",
    });
  };
};

export { authorize };
