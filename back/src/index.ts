import "dotenv/config";
import { testRoutes } from "./routes/testRoutes";
import * as cors from "cors";
import * as express from "express";
const bodyParser = require("body-parser");
import { appDataSource } from "./database";
import { UserEntity } from "./entity/userEntity";
const app = express();
app.use(bodyParser.json());

app.use(cors());
testRoutes({ app });

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
