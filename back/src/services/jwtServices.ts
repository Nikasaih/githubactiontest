import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";
import { UserEntity } from "../entity/userEntity.js";
import { IJwtDatagram } from "../shared/data/userData.js";

export const generateJwt = (user: UserEntity) => {
  const { role, id } = user;
  return jsonwebtoken.sign(
    { payload: { role, id } },
    config.security.session.jwtSecret,
    { expiresIn: config.security.session.jwtExpiresInMap.get(role) ?? "1h" }
  );
};

export const validateJwt = (
  authentication: string
): IJwtDatagram | undefined => {
  try {
    const { payload } = jsonwebtoken.verify(
      authentication,
      config.security.session.jwtSecret
    );

    return payload;
  } catch (err) {
    return undefined;
  }
};
