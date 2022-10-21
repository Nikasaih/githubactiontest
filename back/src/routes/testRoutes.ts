import { allRoute } from "../shared/routesUrls";

export const testRoutes = ({ app }) => {
  //@ts-ignore
  app.get(allRoute.testRouteRoot, (req, res, next) => {
    res.status(200).json({
      hello: "World!",
    });
    return;
  });

  app.post(allRoute.testRouteRoot, (req, res) => {
    console.table(req.body);
    res.status(200).send(req.body);
    return;
  });
};
