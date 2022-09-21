import React from "react";
import { Alert, AlertTitle, Grid } from "@mui/material";

export const Error = ({ message = "No pokemon found" }) => {
  let alertMessage = message;
  let alertTitle = "Error";
  if (message === `Unexpected token 'N', "Not Found" is not valid JSON`) {
    alertMessage = "No pokemon found";
    alertTitle = alertTitle + " 404";
  }
  return (
    <Grid width='100%' container justifyContent='center'>
      <Alert
        severity="error"
        sx={{ backgroundColor: "black", color: "white", width: "50%" }}
      >
        <AlertTitle>{alertTitle}</AlertTitle>
        <strong>{alertMessage}</strong>
      </Alert>
    </Grid>
  );
};
