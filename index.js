import express from "express";
import db from "./repository/DBContext";
import { routes } from "./routes/routes";
import { initKeycloak } from "./services/oauth/KeycloakIdentityService";

var app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const keycloak = initKeycloak(app);
app.use(keycloak.middleware());

routes(app);

db.connect();
db.sync({ alter: true });

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3000);
