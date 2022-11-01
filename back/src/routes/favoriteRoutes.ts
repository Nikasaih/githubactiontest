import { allRoute } from "../shared/routesUrls";
import * as express from "express";
import { IMyRequest } from "../routes/IMyRequest";
import { hasBuyerAuthority } from "../middleware/authority/specific";
import {
  addToMyFavorite,
  getAllMyFavorite,
  removeFromMyFavorite,
} from "../services/favoriteService";

export const articlesRoute = ({ app }) => {
  app.get(
    allRoute.favoritesRoute.getMyFavorite,
    hasBuyerAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      res.send(await getAllMyFavorite(req.auth));
    }
  );

  app.post(
    `${allRoute.favoritesRoute.addToMyFavorite}/:id`,
    hasBuyerAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      //@ts-ignore
      res.status(201).send(await addToMyFavorite(req.params.id, req.auth));
    }
  );

  app.delete(
    `${allRoute.favoritesRoute.remoteFromMyFavorite}/:id`,
    hasBuyerAuthority(),
    async (req: IMyRequest, res: express.Response) => {
      //@ts-ignore
      res.send(await removeFromMyFavorite(req.params.id, req.auth));
    }
  );
};
