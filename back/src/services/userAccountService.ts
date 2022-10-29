import {
  EUserRole,
  ILoginRequest,
  IRegistrationRequest,
} from "../shared/data/userData/userDataInterface";
import { UserEntity } from "../entity/userEntity";
import { appDataSource } from "../database";
import { hashPassword } from "./pwHashServices";
import { generateJwt } from "./jwtServices";

const userRepo = appDataSource.getRepository(UserEntity);
export const manageRegistration = (regData: IRegistrationRequest) => {
  const newUser = new UserEntity();
  newUser.firstName = regData.firstName;
  newUser.lastName = regData.lastName;
  newUser.role = EUserRole.BASIC;

  const [hashedPwd, salt] = hashPassword(regData.password);
  newUser.hashedPassword = hashedPwd;
  newUser.passwordSalt = salt;
  newUser.email = regData.email;

  userRepo.save(newUser);
};

export const manageLogin = async (
  loginData: ILoginRequest
): Promise<string | undefined> => {
  const userAccount = await userRepo.findOneBy({
    email: loginData.currentEmail,
  });
  if (!userAccount) {
    return;
  }
  return generateJwt(userAccount);
};
