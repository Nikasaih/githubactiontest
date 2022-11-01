import * as express from "express";

export interface IMyRequest extends express.Request {
  auth: any;
  validBody: any;
}
