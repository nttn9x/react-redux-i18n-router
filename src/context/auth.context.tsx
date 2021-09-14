import React, { useContext, useCallback, useState } from "react";
import { getUser, setUser } from "utils/auth.util";

const AuthContext = React.createContext<any>({
  user: null,
});

const Auth = ({ children }: any) => {
  const [state, setState] = useState(() => {
    return { user: getUser() };
  });

  const updateUser = useCallback(
    (user: any) => {
      setState({ user });
      setUser(user);
    },
    [setState]
  );

  return (
    <AuthContext.Provider value={{ state, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default Auth;
