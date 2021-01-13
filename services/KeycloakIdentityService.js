var session = require("express-session");
var Keycloak = require("keycloak-connect");

let _keycloak;

var keycloakConfig = {
  clientId: "spring-boot-backend",
  bearerOnly: true,
  serverUrl: "http://173.82.154.246:8180/auth",
  realm: "audioyard",
  realmPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh+pIAEj+GXkilF0zVVHFyh4lZhZiUF96qZtb4xubQ7Kh+fsDpFiTUc4p73y7rw56MaxWp+/2GR8fD35YR+rBmphmS/VXBfY1b+Mip3dNXW1PyDAw7t9GzfDGD7842VgeGoX71OfM0WgLJmkND8fFjE6DRZ7DHXwad6dE+gW05xcS7iemqGn5j1f73gPA0Bnz7WRxI/j5B9zOM9nuvmC0UzO1MI3Oxd+UY2oxrWOnBKb/c7vtQdC0XqsvOm7L0KnEGVk9mLHJKD3WkkO6eByutJwku7wHnZCc+L6ORBDxfD6Qaki8I6vrZsiRTV6RfkcsokKAhXJjQgcaIntFYBAWdQIDAQAB",
};

const initKeycloak = (app) => {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!");
    return _keycloak;
  } else {
    console.log("Initializing Keycloak...");
    var memoryStore = new session.MemoryStore();

    app.use(
      session({
        secret: "spring-boot-backend",
        resave: false,
        saveUninitialized: true,
        store: memoryStore,
      })
    );

    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
    return _keycloak;
  }
};

const getKeycloak = () => {
  if (!_keycloak) {
    console.error(
      "Keycloak has not been initialized. Please called init first."
    );
    throw new Error('Keycloak is notinitialized')
  }
  return _keycloak;
};

export { initKeycloak, getKeycloak };
