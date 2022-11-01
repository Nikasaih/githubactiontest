import "dotenv/config";
import * as cors from "cors";
import * as express from "express";
import { appDataSource } from "./database";
import { UserEntity } from "./entity/userEntity";
import { userAccountRoutes } from "./routes/userAccountRoutes";
import { isDevEnv } from "./shared/utils/isRightEnvironement";
import { devEnvRoutes } from "./routes/debug/devEnvRoutes";
import { articlesRoute } from "./routes/articlesRoute";
import { adminRoutes } from "./routes/adminRoutes";
import { superAdminRoutes } from "./routes/superAdminRoutes";

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use("/images", express.static("images"));
app.use(cors());
//ROUTES
userAccountRoutes({ app });
articlesRoute({ app });
adminRoutes({ app });
superAdminRoutes({ app });
if (isDevEnv()) {
  devEnvRoutes({ app });
}
//----------

const port: Number = Number(process.env.PORT) || 3000;
const startServer = async () => {
  await app.listen(port, () => {
    console.log(`
Server running on http://localhost:${port}
`);
  });
};

(async () => {
  await startServer();
  appDataSource.getRepository(UserEntity);
})();
