import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";

import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";

import { SearchComponent } from "./SearchComponent";
import { AuthContext } from "../../../auth/context";
import { PokedexContext } from "../../context";

export const NavBar = () => {
  const {resetPage} = useContext(PokedexContext);
  const { logout } = useContext(AuthContext);
  const onLogout = () => {
    resetPage();
    logout();
  };
  return (
    <AppBar position="fixed" color="secondary" sx={{ height: "9%" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            width: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Link component={RouterLink} color="inherit" to="/pokedex/home">
              <Typography variant="h6" noWrap component="div">
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchComponent placeHolder="Search by name or number" />
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Typography color="white" variant="h6" noWrap component="div">
              Logout
            </Typography>
            <IconButton color="error" onClick={onLogout}>
              <LogoutOutlined sx={{ color: "#ffff" }} />
            </IconButton>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
