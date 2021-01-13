import express from "express";
import { routes } from "./routes/routes";
import { initKeycloak } from "./services/oauth/KeycloakIdentityService";

var app = express();

const keycloak = initKeycloak(app);
app.use(keycloak.middleware());

routes(app);

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3000);
