import db from "./DBContext";

const User = () => db.sequelize.define("keycloak_user", {
  firstName: {
    type: db.Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: db.Sequelize.STRING,
    field: 'last_name'
  },
  dob: {
    type: db.Sequelize.DATEONLY,
    field: 'date_of_birth'
  },
});

export { User };