export interface IArticleAbs {
  id?: string;
  title: string;
  description: string;
  criteria: EArticleCriteria;
  location: string;
  isPublic: boolean;
}

export interface IArticleDto extends IArticleAbs {}

export interface IArticleEntity extends IArticleAbs {
  createdAt?: Date;
  updatedAt?: Date;
  imagesPath: string[];
}

export enum EArticleCriteria {
  GREAT,
  BAD,
  OK,
}
