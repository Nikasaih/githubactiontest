import { appDataSource } from "../database";
import { ArticleEntity } from "../entity/articleEntity";
import { FavoriteEntity } from "../entity/favoriteEntity";
import { UserEntity } from "../entity/userEntity";
import { entityNotFound, jwtError } from "../error/customError";
import { IJwtDatagram } from "../shared/data/userData/userDataInterface";

const favoriteRepo = appDataSource.getRepository(FavoriteEntity);
const userRepo = appDataSource.getRepository(UserEntity);
const articleRepo = appDataSource.getRepository(ArticleEntity);

export const getAllMyFavorite = async (
  userData: IJwtDatagram
): Promise<FavoriteEntity[]> => {
  const allFavorite = await favoriteRepo.find();
  return allFavorite.filter((favorite) => favorite.manager.id === userData.id);
};

export const addToMyFavorite = async (
  articleId: string,
  userData: IJwtDatagram
) => {
  const user = await userRepo.findOneBy({ id: userData.id });
  if (!user) {
    throw jwtError();
  }
  const article = await articleRepo.findOneBy({ id: articleId });
  if (!article) {
    throw entityNotFound();
  }

  const newFavorite = new FavoriteEntity();
  newFavorite.manager = user;
  newFavorite.articleRef = article;

  return favoriteRepo.save(newFavorite);
};
export const removeFromMyFavorite = async (
  articleId: string,
  userData: IJwtDatagram
) => {
  const myFavorite = await getAllMyFavorite(userData);

  const faveToDel = myFavorite.find((fav) => fav.articleRef.id === articleId);
  if (!faveToDel) {
    throw entityNotFound();
  }
  return favoriteRepo.remove(faveToDel);
};
