import db from "../../repository/DBContext";

const getAllUserUniDetails = async () => {
  const userUniversityRepository = db.UserUniversity;

  const result = await userUniversityRepository.findAll({
    include: [
      {
        model: db.User,
        as: "user",
        required: true,
        // attributes: ['id', 'username', 'email'],
      },
      {
        model: db.University,
        as: "university",
        attributes: ["id", "name"],
        required: true,
      },
    ],
  });

  // for (const u of result) {
  //   console.log("*******************************");
  //   console.log(u.user);
  // }

  // console.log(result[0].dataValues);

  const r = result.map((item) => {
    return {
      email: item.user.email,
    };
  });

  console.log(r);
  return result;
};

const UserUniversityService = {
  getAllUserUniDetails: getAllUserUniDetails,
};
export { UserUniversityService };
