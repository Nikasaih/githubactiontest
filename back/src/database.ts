import { DataSource } from "typeorm";
import { ArticleEntity } from "./entity/articleEntity";
import { FavoriteEntity } from "./entity/favoriteEntity";
import { UserEntity } from "./entity/userEntity";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "roott",
  password: "roott",
  database: "roott",
  synchronize: true,
  logging: true,
  entities: [UserEntity, ArticleEntity, FavoriteEntity],
  subscribers: [],
  migrations: [],
});

appDataSource.initialize();
