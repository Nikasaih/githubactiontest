import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getCurrentJwt, login, logout, parseJwt } from "../../feats/auth";
import {
  IJwtDatagram,
  ILoginRequest,
} from "../../shared/data/userData/userDataInterface";
import { allRoute } from "../../shared/routesUrls";
import { usePostApi } from "./usePostApi";

export interface IUseAuth {
  auth: IJwtDatagram | undefined;
  isLoaded: boolean;
  handleLogin: (loginReq: ILoginRequest) => void;
  handleLogout: () => void;
}
export const useAuth = (): IUseAuth => {
  const [auth, setAuth] = useState<IJwtDatagram | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);
  const postApi = usePostApi();

  useEffect(() => {
    const jwt = getCurrentJwt();
    if (!jwt) {
      setIsLoaded(true);
      return;
    }
    const newAuth = parseJwt(jwt);
    setAuth(newAuth);
    setIsLoaded(true);
  }, []);

  const handleLogout = () => {
    setAuth(undefined);
    logout();
  };

  const handleLogin = (loginReq: ILoginRequest) => {
    postApi.postReq(
      {
        route: allRoute.userAccountRoute.login,
        body: loginReq,
        customHeader: undefined,
      },
      (respon: AxiosResponse<string, any>) => {
        setAuth(parseJwt(respon.data));
        login(respon.data);
      }
    );
  };

  return { auth, isLoaded, handleLogin, handleLogout };
};
