import { Routes, Route } from "react-router-dom";
import { allRoute } from "../shared/routesUrls";
import { HomePage } from "./genericPages/homePage";
import { OneArticlePage } from "./genericPages/oneArticlePage";
interface Page {
  path: string;
  pageJSX: JSX.Element;
}
const genericP: Page[] = [
  { path: "", pageJSX: <HomePage /> },
  { path: `${allRoute.articlesRoute.get}/:id`, pageJSX: <OneArticlePage /> },
];

const anonymousP: Page[] = [];
const superAdminP: Page[] = [];
const adminP: Page[] = [];
const userIdentifiedP: Page[] = [];

const allP: Page[] = [
  ...genericP,
  ...anonymousP,
  ...superAdminP,
  ...adminP,
  ...userIdentifiedP,
];

export const PageManager = (): JSX.Element => {
  return (
    <Routes>
      {allP.map((page, index) => {
        return (
          <Route key={index} path={page.path} element={page.pageJSX}></Route>
        );
      })}
    </Routes>
  );
};
