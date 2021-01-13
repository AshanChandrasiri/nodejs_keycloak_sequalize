import { router as indexRouter } from "./index";
const userRouter = require('./users')

const routes = (app) => {
  app.use("/index", indexRouter);
  app.use("/users", userRouter());
};

export { routes };
