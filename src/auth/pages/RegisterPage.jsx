import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks";

export const RegisterPage = () => {
  const {name , password, onInputChange} = useForm({
    name: '',
    password: '',
  })
  const { register, registerStatus } = useContext(AuthContext);

  const onRegister = (event) => {
    event.preventDefault();

    if (!name || !password) return;
    register(name, password);
  };
  return (
    <AuthLayout title="Create account">
      <form onSubmit={onRegister}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Username"
              type="name"
              placeholder="Username"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                onClick={onRegister}
                color="secondary"
                variant="contained"
                fullWidth
              >
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}> Do you have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
          {registerStatus != "" && (
            <Typography
              fontWeight="bold"
              color={registerStatus === "Sucess" ? "#4ab03a" : "secondary"}
            >
              {registerStatus}
            </Typography>
          )}
        </Grid>
      </form>
    </AuthLayout>
  );
};
