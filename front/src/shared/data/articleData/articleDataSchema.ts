import * as yup from "yup";
import { IArticleDto } from "./articleDataInterface";

export const articleDtoSchema: yup.SchemaOf<IArticleDto> = yup.object({
  criteria: yup.number().required(),
  description: yup.string().required(),
  title: yup.string().required(),
  isPublic: yup.boolean().required(),
  location: yup.string().required(),
  id: yup.string().notRequired(),
});
