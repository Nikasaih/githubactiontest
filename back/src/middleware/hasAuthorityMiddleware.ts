import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import { validateJwt } from "../services/jwtServices";
import { EUserRole } from "../shared/data/userData/userDataInterface";

export const hasValidJwtMiddleware = (
  request: IMyRequest,
  response: express.Response,
  next
) => {
  const jwt: string = (request.headers["authentication"] as string) ?? "";
  const jwtDatagram = validateJwt(jwt);
  if (jwtDatagram === undefined) {
    response.status(401).send();
    return;
  }

  request.auth = jwtDatagram;

  next();
};

const adminRoleAuthority = new Set<EUserRole>([
  EUserRole.ADMIN,
  EUserRole.SUPER_ADMIN,
]);
export const hasAdminAuthority = (
  request: IMyRequest,
  response: express.Response,
  next
) => {
  if (!request.auth) {
    response.status(401).send();
    return;
  }
  if (!adminRoleAuthority.has(request.auth?.role)) {
    response.status(403).send();
    return;
  }

  next();
};
