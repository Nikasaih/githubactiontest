import * as yup from "yup";
export enum EUserRole {
  BASIC,
  ADMIN,
  SUPER_ADMIN,
}

export interface IPublicUserData {
  firstName: string;
  lastName: string;
}

export interface IPrivateUserData extends IPublicUserData {}

export interface BridgeUserData {
  role: EUserRole;
}

export interface IRegistrationRequest extends IPrivateUserData {
  password: string;
}

export interface IJwtDatagram extends BridgeUserData, IPublicUserData {}

export const registrationRequest: yup.SchemaOf<IRegistrationRequest> =
  yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    password: yup.string().required(),
  });

/// CREDENTIAL
const yupPasswordRule = yup.string().required(); //todo specify password politic
const userCurrentCredentialSchema = yup.object().shape({
  currentEmail: yup.string().email().required(),
  currentPwd: yupPasswordRule,
});

//
export const loginRequestSchema = userCurrentCredentialSchema;
export type ILoginRequest = yup.InferType<typeof loginRequestSchema>;

//
export const changeEmailRequestSchema = userCurrentCredentialSchema.concat(
  yup.object().shape({
    newEmail: yup.string().email().required(),
  })
);
export type IChangeEmailRequest = yup.InferType<
  typeof changeEmailRequestSchema
>;

//
export const changePwdRequestSchema = userCurrentCredentialSchema.concat(
  yup.object().shape({
    newPwd: yupPasswordRule,
  })
);
export type IChangePwdRequest = yup.InferType<typeof changePwdRequestSchema>;
