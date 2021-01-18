import db from "./DBContext";

const University = () => {
  const university = db.sequelize.define("university", {
    id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    firebaseUrl: {
      type: db.Sequelize.STRING,
      field: "firebase_url",
    },
    name: {
      type: db.Sequelize.STRING,
      field: "name",
    },
  });

  return university;
};

export { University };
