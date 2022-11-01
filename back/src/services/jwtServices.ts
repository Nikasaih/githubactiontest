import * as jsonwebtoken from "jsonwebtoken";
import config from "../config";
import { UserEntity } from "../entity/userEntity";
import { IJwtDatagram } from "../shared/data/userData/userDataInterface";

export const generateJwt = (user: UserEntity) => {
  const jwtDatagram: IJwtDatagram = {
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    id: user.id,
  };

  return jsonwebtoken.sign(
    { payload: jwtDatagram },
    config.security.session.jwtSecret,
    {
      expiresIn: config.security.session.jwtExpiresInMap.get(user.role) ?? "1h",
    }
  );
};

export const validateJwt = (
  authentication: string
): IJwtDatagram | undefined => {
  try {
    const res = jsonwebtoken.verify(
      authentication,
      config.security.session.jwtSecret
    );
    if (typeof res === "string") {
      return undefined;
    }
    return res.payload;
  } catch (err) {
    return undefined;
  }
};
