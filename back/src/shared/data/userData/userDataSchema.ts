import * as yup from "yup";
import { ICurrentCredential, IRegistrationRequest } from "./userDataInterface";

export const registrationRequestSchema: yup.SchemaOf<IRegistrationRequest> =
  yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
  });
const yupPasswordRule = yup.string().required(); //todo specify password politic
const userCurrentCredentialSchema: yup.SchemaOf<ICurrentCredential> =
  yup.object({
    currentEmail: yup.string().email().required(),
    currentPwd: yupPasswordRule,
  });

export const loginRequestSchema = userCurrentCredentialSchema;
