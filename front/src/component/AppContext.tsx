import { createContext } from "react";
import { IUseAuth, useAuth } from "../hooks/rest-hook/useAuth";
//todo continue
interface IContext {
  generalUseAuth?: IUseAuth;
}
export const AppContext = createContext<IContext>({});
interface IProps {
  children: JSX.Element;
}

export const AppContextProvider = ({ children }: IProps) => {
  const generalUseAuth = useAuth();
  return (
    <AppContext.Provider value={{ generalUseAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
