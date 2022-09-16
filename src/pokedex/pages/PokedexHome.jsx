import { Grid } from "@mui/material";

import { PokedexLayout } from "../layout/PokedexLayout";
import { HomePagination, PokemonsList } from "../components";

export const PokedexHome = () => {
  return (
    <>
      <PokedexLayout>
        <Grid container direction="column">
          <HomePagination />
          <PokemonsList />
        </Grid>
      </PokedexLayout>
    </>
  );
};
