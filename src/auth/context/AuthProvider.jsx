import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const initUser = () => {
  const user = localStorage.getItem("pokedexUser");
  return {
    logged: !!user,
    user: user,
  };
};
const initUsers = () => {
  const users = JSON.parse(localStorage.getItem("pokedexUsers"));
  return users || [];
};

export const AuthProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(initUser);
  const [users, setUsers] = useState(initUsers);
  const [registerStatus, setRegisterStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  useEffect(() => {
    localStorage.setItem("pokedexUsers", JSON.stringify(users));
  }, [users])
  
  const register = (name, password) => {
    const newUser = {
      user: name,
      password: password,
    };
    const alreadyCreate = users.find((user) => user?.user === newUser.user);
    if (!alreadyCreate) {
      setUsers([...users, newUser]);
      setRegisterStatus("Sucess");
    } else {
      setRegisterStatus("The user already exists");
    }
  };
  const login = (name, password) => {
    const loginUser = {
      user: name,
      password: password,
    };
    const userInStorage = users.find((user) => user?.user === loginUser.user);
    if (userInStorage) {
      if (userInStorage.password === loginUser.password) {
        setLoginState({
          logged: true,
          user: name,
        });
        localStorage.setItem("pokedexUser", name);
        setLoginStatus("");
      } else {
        setLoginStatus("Incorrect password");
      }
    } else {
      setLoginStatus("User does not exist");
    }
  };
  const logout = () => {
    localStorage.removeItem("pokedexUser");
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
        registerStatus,
        loginStatus,
        //methods
        login: login,
        logout: logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
