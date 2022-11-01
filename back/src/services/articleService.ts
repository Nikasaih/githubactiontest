import { appDataSource } from "../database";
import { ArticleEntity } from "../entity/articleEntity";

const articleRepo = appDataSource.getRepository(ArticleEntity);

export const getAllArticle = async () => {
  return await articleRepo.find();
};

export const getArticleById = async (articleId: string) => {
  return await articleRepo.findOneBy({ id: articleId });
};

export const delArticleById = async (articleId: string) => {
  const article = await articleRepo.findOneBy({ id: articleId });
  if (!article) {
    return false;
  }

  await articleRepo.delete(article);
  return true;
};

export const upsertOneArticle = async (
  article: IArticleDto,
  entity: ArticleEntity = new ArticleEntity()
) => {
  Object.keys(entity).forEach((key) => (entity[key] = article[key]));

  return await articleRepo.save(entity);
};
