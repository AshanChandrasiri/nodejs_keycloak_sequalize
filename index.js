import express from "express";
import db from "./repository/DBContext";
import { routes } from "./routes/routes";
import { initKeycloak } from "./services/oauth/KeycloakIdentityService";

var app = express();

const keycloak = initKeycloak(app);
app.use(keycloak.middleware());

routes(app);

db.connect();
db.sync({alter : true})

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3000);
