import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Grid, TextField } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  const onLogin = (event) => {
    event.preventDefault();
    if (!userName) return;
    login(userName);
    navigate("/pokedex/home");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onLogin}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="name"
              placeholder="Nombre"
              fullWidth
              onChange={handleChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={onLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
