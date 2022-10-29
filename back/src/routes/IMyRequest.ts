import * as express from "express";
import { IJwtDatagram } from "../shared/data/userData/userDataInterface";

export interface IMyRequest extends express.Request {
  auth: IJwtDatagram | undefined;
  validBody: any;
}
