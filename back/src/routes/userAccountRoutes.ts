import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import {
  ILoginRequest,
  IRegistrationRequest,
} from "../shared/data/userData/userDataInterface";
import {
  manageLogin,
  manageRegistration,
} from "../services/userAccountService";
import { isValidBody } from "../middleware/isValidBody";
import {
  loginRequestSchema,
  registrationRequestSchema,
} from "../shared/data/userData/userDataSchema";

export const userAccountRoutes = ({ app }) => {
  app.post(
    allRoute.userAccountRoute.register,
    isValidBody<IRegistrationRequest>(registrationRequestSchema),
    (req: IMyRequest, res: express.Response) => {
      manageRegistration(req.validBody as IRegistrationRequest);
      res.status(201).send("register success. Check your email");
      return;
    }
  );

  app.post(
    allRoute.userAccountRoute.login,
    isValidBody<ILoginRequest>(loginRequestSchema),
    async (req: IMyRequest, res: express.Response) => {
      const jwt: string | undefined = await manageLogin(
        req.validBody as ILoginRequest
      );

      if (!jwt) {
        res.status(401).send("some error append: check your credential");
        return;
      }
      res.status(201).send(jwt);
      return;
    }
  );
};
