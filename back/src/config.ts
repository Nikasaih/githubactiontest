import { EUserRole } from "./shared/data/userData/userDataInterface";

interface ISecurityConfig {
  password: {
    characterNumber: number;
    iterationNumber: number;
    digestAlgo: string;
    pepper: string;
  };
  session: { jwtSecret: string; jwtExpiresInMap: Map<EUserRole, string> };
}

interface IConfig {
  security: ISecurityConfig;
}

const securityData: ISecurityConfig = {
  password: {
    characterNumber: 128,
    iterationNumber: 100000,
    digestAlgo: "sha512",
    pepper: "myPepper",
  },
  session: {
    jwtSecret: "myJwtSecret",
    jwtExpiresInMap: new Map([
      [EUserRole.SUPER_ADMIN, "2h"],
      [EUserRole.ADMIN, "2h"],
    ]),
  },
};

const configData: IConfig = {
  security: securityData,
};

export default configData;
