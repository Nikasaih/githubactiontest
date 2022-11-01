import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "./IMyRequest";
import { isValidBody } from "../middleware/isValidBody";
import { getAllArticle, getArticleById } from "../services/articleService";
import {
  hasAdminAuthority,
  hasSellerAuthority,
} from "../middleware/authority/specific";

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

  app.delete(
    `${allRoute.articlesRoute.delAdmin}/:id`,
    hasAdminAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      //@ts-ignore
      res.send(200).send(await delArticleById(req.params.id));
    }
  );
};
