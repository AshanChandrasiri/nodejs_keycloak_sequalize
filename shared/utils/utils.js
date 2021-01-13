const getAttributesFromToken = (req, attr) => {
  try {
    return (
      req &&
      req.kauth &&
      req.kauth.grant &&
      req.kauth.grant.access_token.content[attr]
    );
  } catch (error) {
    throw new Error("token decode error");
  }
};

export { getAttributesFromToken };
