import { Grid, Typography } from "@mui/material";
import { memo } from "react";

export const UserTitle = memo(({ title }) => {
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
        marginTop: {xs: "1.5em", sm: "2em", md: "2.5em", lg:"4em"}
      }}
    >
      <Typography
        fontWeight="bold"
        sx={{
          wordWrap: "break-word",
          fontSize: { xs: "1.5em", sm: "2em", md: "2.5em" },
          fontSize: { xs: "1.5em", sm: "2em", md: "3.5em", lg:"4em" },
        }}
        color="white"
        component="h2"
      >
        ¡Pokedex {title}!
      </Typography>
    </Grid>
  );
});
