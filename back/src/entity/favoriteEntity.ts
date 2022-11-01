import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ArticleEntity } from "./articleEntity";
import { UserEntity } from "./userEntity";

@Entity()
export class FavoriteEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => ArticleEntity)
  articleRef: ArticleEntity;
  @ManyToOne(() => UserEntity, (user) => user.favorites)
  manager: UserEntity;
}
