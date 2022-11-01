const userAccountRoute = { register: "/register", login: "/login" };
const articlesRoute = {
  get: "/articles",
  upsertMy: "/articles/my",
  delAdmin: "/articles",
  delMy: "/articles/my",
};
const favoritesRoute = {
  getMyFavorite: "/favorites/my",
  addToMyFavorite: "/favorite/my",
  remoteFromMyFavorite: "/favorite/my",
};
export const allRoute = {
  userAccountRoute,
  articlesRoute,
  favoritesRoute,
};
