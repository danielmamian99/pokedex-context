import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { PokedexLayout } from "../layout/PokedexLayout";
import {
  Error,
  ShowStats,
  Spinner,
  PokemonCard,
  PokemonDescripcion,
  ButtonsNavigation,
} from "../components";
import { useFetchPokemon } from "../hooks";

export const PokemonPage = () => {
  const { id } = useParams();
  const { pokemon, loading, error } = useFetchPokemon(id);
  return (
    <PokedexLayout>
      {loading ? (
        <Spinner />
      ) : error || id > 898 ? (
        <Error message={error.message} />
      ) : (
        <Grid>
          <ButtonsNavigation id={pokemon.id} />
          <Grid
            container
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6}>
              <PokemonCard urlImage={pokemon.img} name={pokemon.name} />
            </Grid>
            <Grid item xs={8} sm={6} sx={{ height: "100%" }}>
              <PokemonDescripcion pokemon={pokemon} />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            width="100%"
          >
            <ShowStats stats={pokemon.stats} />
          </Grid>
        </Grid>
      )}
    </PokedexLayout>
  );
};
