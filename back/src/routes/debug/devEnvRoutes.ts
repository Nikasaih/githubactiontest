import * as express from "express";
import { appDataSource } from "../../database";
import { UserEntity } from "../../entity/userEntity";
import { IMyRequest } from "../IMyRequest";
const userRepo = appDataSource.getRepository(UserEntity);

export const devEnvRoutes = ({ app }) => {
  //@ts-ignore
  app.get("/dev--test", (_: IMyRequest, res: express.Response) => {
    res.status(200).json({
      hello: "World!",
    });
    return;
  });

  //todo disabled
  app.get("/dev--users", async (_: IMyRequest, res: express.Response) => {
    res.send(await userRepo.find());
  });
};
