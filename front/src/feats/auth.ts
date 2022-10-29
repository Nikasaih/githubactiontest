import { IJwtDatagram } from "../shared/data/userData/userDataInterface";
import jwt_decode from "jwt-decode";
export const getCurrentJwt = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return;
};
interface t {
  exp: number;
  iat: number;
  payload: IJwtDatagram;
}
export const parseJwt = (token: string): IJwtDatagram | undefined => {
  let decode: t = jwt_decode(token);
  return decode.payload;
};

export const login = (jwt: string) => {
  localStorage.setItem("jwt", jwt);
};

export const logout = () => {
  localStorage.setItem("jwt", "");
};
