import "dotenv/config";
import * as cors from "cors";
import * as express from "express";
const bodyParser = require("body-parser");
import { appDataSource } from "./database";
import { UserEntity } from "./entity/userEntity";
import { userAccountRoutes } from "./routes/userAccountRoutes";
import { isDevEnv } from "./utils/isRightEnvironement";
import { devEnvRoutes } from "./routes/debug/devEnvRoutes";
const app = express();
app.use(bodyParser.json());

app.use(cors());
userAccountRoutes({ app });
if (isDevEnv()) {
  devEnvRoutes({ app });
}
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
