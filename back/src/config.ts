import { EUserRole } from "./shared/data/userData";

interface IConfig {
  security: {
    password: {
      characterNumber: number;
      iterationNumber: number;
      digestAlgo: string;
      pepper: string;
    };
    session: { jwtSecret: string; jwtExpiresInMap: Map<EUserRole, string> };
  };
}

const configData: IConfig = {
  security: {
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
  },
};

export default configData;
