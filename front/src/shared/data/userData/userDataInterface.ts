export enum EUserRole {
  BASIC,
  ADMIN,
  SUPER_ADMIN,
}

export interface IPublicUserData {
  firstName: string;
  lastName: string;
}

export interface IPrivateUserData extends IPublicUserData {
  email: string;
}

export interface BridgeUserData {
  role: EUserRole;
  id: string;
}

export interface IRegistrationRequest extends IPrivateUserData {
  password: string;
}

export interface IJwtDatagram extends BridgeUserData, IPublicUserData {}

/// CREDENTIAL
export interface ICurrentCredential {
  currentEmail: string;
  currentPwd: string;
}

//
export interface ILoginRequest extends ICurrentCredential {}
