import { appDataSource } from "../database";
import { ArticleEntity } from "../entity/articleEntity";
import { UserEntity } from "../entity/userEntity";
import { entityNotFound, jwtError, notAuthorized } from "../error/customError";
import { IArticleDto } from "../shared/data/articleData/articleDataInterface";
import { IJwtDatagram } from "../shared/data/userData/userDataInterface";

const articleRepo = appDataSource.getRepository(ArticleEntity);
const userRepo = appDataSource.getRepository(UserEntity);
export const getAllArticle = async () => {
  return await articleRepo.find();
};

export const getArticleById = async (articleId: string) => {
  return await articleRepo.findOneBy({ id: articleId });
};

export const delArticleById = async (articleId: string) => {
  const article = await articleRepo.findOneBy({ id: articleId });
  if (!article) {
    throw entityNotFound();
  }

  await articleRepo.remove(article);
};

export const upsertOneArticleWithAuth = async (
  article: IArticleDto,
  userData: IJwtDatagram
) => {
  const entityToPersist =
    (await articleRepo.findOneBy({ id: article.id })) ?? new ArticleEntity();

  Object.keys(entityToPersist).forEach((key) => {
    if (article[key]) {
      entityToPersist[key] = article[key];
    }
  });

  if (entityToPersist.manager && entityToPersist.manager.id !== userData.id) {
    throw notAuthorized();
  }

  if (!entityToPersist.manager) {
    const userEntity = await userRepo.findOneBy({ id: userData.id });
    if (!userEntity) {
      throw jwtError();
    }

    entityToPersist.manager = userEntity;
  }

  return await articleRepo.save(entityToPersist);
};

export const delOneByIdWithAuth = async (
  articleId: string,
  userData: IJwtDatagram
) => {
  const article = await articleRepo.findOneBy({ id: articleId });
  if (!article) {
    throw entityNotFound();
  }

  if (article.manager.id !== userData.id) {
    throw notAuthorized();
  }

  await articleRepo.remove(article);
};
