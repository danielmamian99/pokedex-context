import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PokedexRoutes } from "../pokedex/routes/PokedexRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/pokedex/*"
        element={
          <PrivateRoute>
            <PokedexRoutes />
          </PrivateRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
