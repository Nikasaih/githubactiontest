import * as express from "express";
import { IMyRequest } from "../../routes/IMyRequest";
import { validateJwt } from "../../services/jwtServices";
import { EUserRole } from "../../shared/data/userData/userDataInterface";

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

export const hasRoleAuthority = (setRoleAuthority: Set<EUserRole>) => {
  return (request: IMyRequest, response: express.Response, next) => {
    const jwt: string = (request.headers["authentication"] as string) ?? "";
    const jwtDatagram = validateJwt(jwt);
    if (!jwtDatagram) {
      response.status(401).send();
      return;
    }
    if (!setRoleAuthority.has(jwtDatagram.role)) {
      response.status(403).send();
      return;
    }
    request.auth = jwtDatagram;

    next();
  };
};
