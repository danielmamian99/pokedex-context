import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

const init = () =>{
  const user = localStorage.getItem('pokedexUser');
  return{
      logged:!!user,
      user:user
  }
};

export const AuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(init);
  const login = (name = "") => {
    localStorage.setItem('pokedexUser',name);
    setLoginState({
      logged: true,
      user: name,
    });
  };
  const logout = () => {
    localStorage.removeItem('pokedexUser');
    setLoginState({
      logged: false,
      user: "",
    });
  };
  return (
    <AuthContext.Provider
      value={{
        //props
        ...loginState,
        //methods
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
