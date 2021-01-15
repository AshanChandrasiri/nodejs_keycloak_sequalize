import db from "./DBContext";

const Cv = () => {
  const cv = db.sequelize.define("cv", {
    firebaseUrl: {
      type: db.Sequelize.STRING,
      field: "firebase_url",
    },
    user: {
      type: db.Sequelize.STRING,
      field: "user_id",
    },
  });

  cv.belongsTo(db.User, {
    foreignKey: "user_id",
    targetKey: "id",
    onDelete: "cascade",
  });

  return cv;
};

export { Cv };
