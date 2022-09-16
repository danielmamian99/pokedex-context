import { Grid, Typography } from "@mui/material";

export const PokemonDescripcion = ({ pokemon }) => {
  return (
    <Grid margin={2}>
      <Grid
        container
        direction="column"
        marginTop="1rem"
        sx={{
          borderRadius: 2,
          p: 2,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          Description
        </Typography>

        <Grid container direction="row">
          <Grid width="50%" container direction="row">
            <Typography>Id: </Typography>
            <Typography color="black" paddingLeft="3px">
              {pokemon.id}
            </Typography>
          </Grid>
          <Grid width="50%" container direction="row">
            <Typography>Height: </Typography>
            <Typography color="black" paddingLeft="3px">
              {pokemon.height}
            </Typography>
          </Grid>
          <Grid width="50%" container direction="row">
            <Typography>Weight: </Typography>
            <Typography color="black" paddingLeft="3px">
              {pokemon.weight}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        marginTop="1rem"
        sx={{
          borderRadius: 2,
          p: 2,
          backgroundColor: "secondary.main",
          color: "white",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          Types
        </Typography>
        <Grid container direction="row">
          {pokemon.types.map((type) => {
            return (
              <Grid width="50%" key={type.type.name}>
                <Typography color="black">{type.type.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        marginTop="1rem"
        sx={{
          borderRadius: 2,
          p: 2,
          backgroundColor: "#4ab03a",
          color: "white",
        }}
      >
        <Typography fontWeight="bold" fontSize="1.2rem">
          Skills
        </Typography>
        <Grid container direction="row">
          {pokemon.abilities.map((ability) => {
            return (
              <Grid width="50%" key={ability.ability.name}>
                <Typography color="black">{ability.ability.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
