import { Grid, Pagination } from "@mui/material";

export const HomePagination = () => {
  const handlePageChange = (event, value) => {
    console.log(value);
  };
  return (
    <Grid container justifyContent="center" marginBottom={2}>
      <Pagination
        color="primary"
        onChange={handlePageChange}
        size="large"
        defaultPage={1}
        count={73}
        variant="outlined"
        shape="rounded"
      />
    </Grid>
  );
};
