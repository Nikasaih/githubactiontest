import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "./IMyRequest";
import { isValidBody } from "../middleware/isValidBody";
import {
  getAllArticle,
  getArticleById,
  upsertOneArticleWithAuth,
} from "../services/articleService";
import { hasSellerAuthority } from "../middleware/authority/specific";
import { articleDtoSchema } from "../shared/data/articleData/articleDataSchema";

export const articlesRoute = ({ app }) => {
  app.get(
    allRoute.articlesRoute.get,
    async (_: IMyRequest, res: express.Response) => {
      res.send(200).send(await getAllArticle());
    }
  );

  app.get(
    `${allRoute.articlesRoute.get}/:id`,
    async (req: IMyRequest, res: express.Response) => {
      //@ts-ignore
      res.send(200).send(await getArticleById(req.param.id));
    }
  );

  app.post(
    allRoute.articlesRoute.upsertMy,
    hasSellerAuthority(),
    isValidBody(articleDtoSchema),
    async (req: IMyRequest, res: express.Response) => {
      try {
        const upserted = upsertOneArticleWithAuth(req.validBody, req.auth);
        res.status(201).send(upserted);
      } catch (err) {
        res.status(400);
      }
    }
  );
};
