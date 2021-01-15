const APPLICATION_JSON_HEADER = {
  "Content-Type": "application/json",
};

const APPLICATION_HTML_HEADER = {
  "Content-Type": "text/html",
};
const ERROR_RESPONSE = {
  BAD_REQUEST: {
    statusCode: "400",
    body: JSON.stringify({
      message: "bad request",
    }),
    headers: APPLICATION_JSON_HEADER,
  },

  FORBIDDEN: {
    statusCode: "403",
    body: JSON.stringify({
      message: "forbidden",
    }),
    headers: APPLICATION_JSON_HEADER,
  },

  NOT_FOUND: {
    statusCode: "404",
    body: JSON.stringify({
      message: "not found",
    }),
    headers: APPLICATION_JSON_HEADER,
  },

  INTERNAL_SERVER_ERROR: {
    statusCode: "500",
    body: JSON.stringify({
      message: "internal server error",
    }),
    headers: APPLICATION_JSON_HEADER,
  },

};

export { ERROR_RESPONSE };
