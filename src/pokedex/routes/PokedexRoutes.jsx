import { Navigate, Route, Routes } from "react-router-dom";
import { PokedexHome } from "../pages/PokedexHome";
import { PokemonPage } from "../pages/PokemonPage";

export const PokedexRoutes = () => {
  return (
    <Routes>
      <Route path="pokemon/:id" element={<PokemonPage />}></Route>
      <Route path="home" element={<PokedexHome />} />
      <Route path="/*" element={<Navigate to="/pokedex/home/" />} />
    </Routes>
  );
};
