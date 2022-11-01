import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

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
}
