import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { UserEntity } from "./userEntity";
import {
  EArticleCriteria,
  IArticleAbs,
} from "../shared/data/articleData/articleDataInterface";

@Entity()
export class ArticleEntity implements IArticleAbs {
  @PrimaryGeneratedColumn("uuid")
  id?: string;
  @Column()
  title: string;
  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: EArticleCriteria,
    default: EArticleCriteria.BAD,
  })
  criteria: EArticleCriteria;
  @Column()
  location: string;
  @Column()
  isPublic: boolean;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  //
  @ManyToOne(() => UserEntity, (user) => user.articles)
  manager: UserEntity;

  @Column("text", { array: true })
  imagesPath: string[];
}
