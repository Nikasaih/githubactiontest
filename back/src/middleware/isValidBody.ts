import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import * as yup from "yup";
import { EBodyType } from "../shared/utils/EBodyType";

export function isValidBody<T>(
  schema: yup.AnyObjectSchema,
  bodyType: EBodyType = EBodyType.RAW_JSON
) {
  return async (req: IMyRequest, res: express.Response, next) => {
    let requestBody: T;
    if (bodyType === EBodyType.RAW_JSON) {
      requestBody = req.body;
    } else {
      requestBody = JSON.parse(req.body.body);
    }
    if (!(await schema.isValid(requestBody))) {
      res.status(403).send("some field have error retry ");
      return;
    }
    req.validBody = requestBody;
    next();
  };
}
