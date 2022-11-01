import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import { isValidBody } from "../middleware/isValidBody";
import { hasAdminAuthority } from "../middleware/authority/specific";

export const adminRoutes = ({ app }) => {
  app.delete(
    `${allRoute.articlesRoute.delAdmin}/:id`,
    hasAdminAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      //@ts-ignore
      res.send(200).send(await delArticleById(req.params.id));
    }
  );
};
