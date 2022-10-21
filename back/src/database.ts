import { DataSource } from "typeorm";
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
  entities: [UserEntity],
  subscribers: [],
  migrations: [],
});

appDataSource.initialize();
