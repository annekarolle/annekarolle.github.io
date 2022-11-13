import { createContext } from "react";
import { IAuthProvider } from "../interfaces/IAuthProvider";
import { IAuthContext } from "./authcontext";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);



const AuthProvider = ({ children }: IAuthProvider) => {

    return (
        <AuthContext.Provider
          value={{}}
        >
          {children}
        </AuthContext.Provider>
      );
    }

export default AuthProvider