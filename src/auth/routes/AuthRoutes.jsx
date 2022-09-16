import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login " />} />
    </Routes>
  );
};
