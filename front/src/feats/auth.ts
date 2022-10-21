import { IJwtDatagram } from "../shared/data/userData";

export const getCurrentJwt = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return;
};

export const parseJwt = (token: string): IJwtDatagram | undefined => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return undefined;
  }
};

export const login = (jwt: string) => {
  localStorage.setItem("jwt", jwt);
};

export const logout = () => {
  localStorage.setItem("jwt", "");
};
