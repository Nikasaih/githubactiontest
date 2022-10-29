import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import * as yup from "yup";

export function isValidBody<T>(schema: yup.AnyObjectSchema) {
  return (req: IMyRequest, res: express.Response, next) => {
    const requestBody: T = req.body;
    if (!schema.validate(requestBody)) {
      res.status(403);
      return;
    }
    req.validBody = requestBody;
    next();
  };
}
