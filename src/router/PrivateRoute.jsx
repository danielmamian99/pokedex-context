import { memo, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/context";

export const PrivateRoute = memo(({ children }) => {
  const { logged } = useContext(AuthContext);
  return logged ? children : <Navigate to="/login" />;
});
