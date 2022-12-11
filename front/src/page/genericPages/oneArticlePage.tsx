import { useParams } from "react-router-dom";
import { useGetApi } from "../../hooks/rest-hook/useGetApi";
import { IArticleEntity } from "../../shared/data/articleData/articleDataInterface";
import { allRoute } from "../../shared/routesUrls";
export const OneArticlePage = () => {
  const { id } = useParams();
  const articleData = useGetApi<IArticleEntity>({
    route: `${allRoute.articlesRoute}/${id}`,
    customHeader: {},
  });

  if (articleData.error) {
    //Todo Error handling
    return <div> error :: id {id}</div>;
  }
  return <div>my page {articleData.response?.description}</div>;
};
