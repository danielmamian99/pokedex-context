import { Grid, Typography } from "@mui/material";

import pokeball from "../../assets/images/mega-bola.png";
import pokedexImg from "../../assets/images/pokedex logo.png";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid>
        <img src={pokedexImg} alt="Pokedex Image" loading="lazy" width="100%" />
      </Grid>
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{ color: "black", mb: 1, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <img
            src={pokeball}
            alt="Pokedex Image"
            loading="lazy"
            width="30px"
            height="30px"
          />
        </Grid>

        {children}
      </Grid>
    </Grid>
  );
};
