import { Grid } from "@mui/material";
import { useContext } from "react";
import { PokedexContext } from "../../context";

import { useFetchPokemons } from "../../../hooks";
import { Error, PokemonCard, Spinner } from "../generals";

export const PokemonsList = () => {
  const { page } = useContext(PokedexContext);
  const urlImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const { pokemons, loading, error } = useFetchPokemons(page);
  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <Spinner />
      ) : (
        <Grid container direction="row" justifyContent="center">
          {pokemons.map((item, id) => (
            <Grid
              container
              direction="row"
              sx={{
                margin: 1,
                width: { xs: 1, sm: 1 / 3, md: 1 / 4, lg: 1 / 5 },
                height: { xs: 1, sm: 1 / 2, md: 1 / 3, lg: 1 / 4 },
              }}
              key={urlImage + id}
            >
              <PokemonCard
                urlImage={urlImage + (id + 1 + (page - 1) * 12) + ".png"}
                name={item.name}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
