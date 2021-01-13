const APPLICATION_JSON_HEADER = {
  "Content-Type": "application/json",
};

const APPLICATION_HTML_HEADER = {
  "Content-Type": "text/html",
};
const ERROR_RESPONSE = {
  BAD_REQUEST: {
    statusCode: "404",
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
};

export { ERROR_RESPONSE };
