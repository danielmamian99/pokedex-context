import { Grid, LinearProgress, Typography } from "@mui/material";

export const ShowStats = ({ stats }) => {
  return (
    <>
      {stats.map((stat) => {
        return (
          <Grid key={stat.stat.name} width="100%">
            <Typography fontWeight="bold" fontSize="1.2rem">
              {stat.stat.name}
            </Typography>
            <LinearProgress variant="determinate" value={stat["base_stat"]*0.50} />
          </Grid>
        );
      })}
    </>
  );
};
