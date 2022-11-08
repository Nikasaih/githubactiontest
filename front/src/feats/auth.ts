import { IJwtDatagram } from "../shared/data/userData/userDataInterface";
import jwt_decode from "jwt-decode";
const JWT_KEY = "jwt";
export const getCurrentJwt = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(JWT_KEY);
  }
  return;
};
interface IJwtStructure {
  exp: number;
  iat: number;
  payload: IJwtDatagram;
}
export const parseJwt = (token: string): IJwtDatagram | undefined => {
  let decode: IJwtStructure = jwt_decode(token);
  return decode.payload;
};

export const login = (jwt: string) => {
  localStorage.setItem(JWT_KEY, jwt);
};

export const logout = () => {
  localStorage.setItem(JWT_KEY, "");
};
