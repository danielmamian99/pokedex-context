import { Grid } from "@mui/material";

import { useFetchPokemons } from "../../hooks";
import { PokemonCard } from "../generals";

export const PokemonsList = () => {
  const urlImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const page = 73;
  const { pokemons } = useFetchPokemons(page);
  return (
    <>
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
              urlImage={urlImage + (id + 1 + page * 12) + ".png"}
              name={item.name}
              pokemonId={id + 1 + page * 12}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
