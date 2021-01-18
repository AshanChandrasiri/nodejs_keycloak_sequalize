import db from "./DBContext";

const UserUniversity = () => {
  const userUniversity = db.sequelize.define("user_university", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  userUniversity.belongsTo(db.User, {
    foreignKey: "user_id",
    as: "user",
    targetKey: "id",
    onDelete: "cascade",
  });

  userUniversity.belongsTo(db.University, {
    foreignKey: "university_id",
    as: "university",
    targetKey: "id",
    onDelete: "cascade",
  });

  return userUniversity;
};

export { UserUniversity };
