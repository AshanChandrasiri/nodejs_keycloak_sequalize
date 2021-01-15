const getAttributesFromToken = (req, attr) => {
  try {
    return req?.kauth?.grant?.access_token.content[attr];
  } catch (error) {
    throw new Error("token decode error");
  }
};

export { getAttributesFromToken };
