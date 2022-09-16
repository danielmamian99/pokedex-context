import { useContext } from "react";

import { Grid } from "@mui/material";
import { AuthContext } from "../../auth/context";

import { NavBar, UserTitle } from "../components";

export const PokedexLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Grid
        container
        sx={{ marginTop: { xs: "20%", sm: "8%", md: "5%", lg: "1%" } }}
        justifyContent="center"
        direction="column"
      >
        <Grid
          alignItems="center"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UserTitle title={user} />
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </>
  );
};
