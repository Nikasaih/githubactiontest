import { createContext, useEffect, useState } from "react";
import { getCurrentJwt, login, logout, parseJwt } from "../feats/auth";
import { IJwtDatagram } from "../shared/data/userData";
//todo continue
export const AppContext = createContext<IContextProvider>({});
interface IProps {
  children: JSX.Element;
}

interface IContextProvider {
  authData?: undefined | IJwtDatagram;
  handleLogout?: () => void;
  handleLogin?: (jwt: string) => void;
}
export const AppContextProvider = ({ children }: IProps) => {
  const [authData, setAuthData] = useState<undefined | IJwtDatagram>();

  const loadAuthDataFromJwt = (current: string | undefined | null) => {
    if (!current) {
      setAuthData(undefined);
      return;
    }
    setAuthData(parseJwt(current));
  };

  const handleLogout = () => {
    setAuthData(undefined);
    logout();
  };

  const handleLogin = (jwt: string) => {
    loadAuthDataFromJwt(jwt);
    login(jwt);
  };

  useEffect(() => {
    loadAuthDataFromJwt(getCurrentJwt());
  }, []);
  return (
    <AppContext.Provider value={{ authData, handleLogout, handleLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
