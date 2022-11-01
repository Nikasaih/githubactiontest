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
  //  images: IImage[];
}

export enum EArticleCriteria {
  GREAT,
  BAD,
  OK,
}

/*todo
interface IImage {
  id: string;
  url: string;
  isPublic: boolean;
}

interface IShippingOption {
  id: string;
  name: string;
  description: string;
  additionalPrice: number;
  // logo: IImage;
}
*/
