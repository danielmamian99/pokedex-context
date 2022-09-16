import { Grid, Typography } from "@mui/material";

export const UserTitle = ({ title }) => {
  return (
    <Grid
      width="50%"
      height="auto"
      textAlign="center"
      alignItems="center"
      container
      justifyContent="center"
      sx={{
        borderRadius: 1,
        wordWrap: "break-word",
        backgroundColor: "#4ab03a",
      }}
    >
      <Typography
        fontWeight="bold"
        sx={{
          wordWrap: "break-word",
          fontSize: { xs: "1.5em", sm: "2em", md: "2.5em" },
        }}
        color="white"
        component="h2"
      >
        ¡Pokedex {title}!
      </Typography>
    </Grid>
  );
};
