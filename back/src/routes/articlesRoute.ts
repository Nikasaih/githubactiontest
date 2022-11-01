import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "./IMyRequest";
import { isValidBody } from "../middleware/isValidBody";
import {
  getAllArticle,
  getArticleById,
  upsertOneArticleWithAuth,
  delOneByIdWithAuth,
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
      try {
        //@ts-ignore
        res.send(200).send(await getArticleById(req.param.id));
      } catch (err) {
        res.send(404);
      }
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

  app.delete(
    `${allRoute.articlesRoute.delMy}/:id`,
    hasSellerAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      try {
        await delOneByIdWithAuth(req.params.id, req.auth);
        res.status(200).send();
      } catch (err) {
        res.status(404).send();
      }
    }
  );
};
