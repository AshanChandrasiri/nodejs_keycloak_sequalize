import db from "./DBContext";

const Cv = () => {
  const cv = db.sequelize.define("cv", {
    firebaseUrl: {
      type: db.Sequelize.STRING,
      field: "firebase_url",
    },
    userId: {
      type: db.Sequelize.STRING,
      field: "user_id",
    },
  });

  cv.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });

  return cv;
};

export { Cv };
