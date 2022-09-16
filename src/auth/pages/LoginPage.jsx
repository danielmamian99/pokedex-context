import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loginStatus } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
const handleName = (event) => {
  setName(event.target.value);
};
const handlePassword = (event) => {
  setPassword(event.target.value);
};
  const onLogin = (event) => {
    event.preventDefault();
    if(!name || !password) return;
    login(name, password);
    navigate("/pokedex/home");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onLogin}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Username"
              type="name"
              placeholder="Username"
              fullWidth
              onChange={handleName}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              onChange={handlePassword}

            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button onClick={onLogin} color="secondary" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
          {loginStatus != '' && <Typography fontWeight='bold' color='secondary'> {loginStatus} </Typography>}
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/register">
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
