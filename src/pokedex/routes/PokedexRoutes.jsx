import { Navigate, Route, Routes } from "react-router-dom";
import { PokedexProvider } from "../context";
import { PokedexHome } from "../pages/PokedexHome";
import { PokemonPage } from "../pages/PokemonPage";

export const PokedexRoutes = () => {
  return (
    <PokedexProvider>
      <Routes>
        <Route path="pokemon/:id" element={<PokemonPage />}></Route>
        <Route path="home" element={<PokedexHome />} />
        <Route path="/*" element={<Navigate to="/pokedex/home/" />} />
      </Routes>
    </PokedexProvider>
  );
};
