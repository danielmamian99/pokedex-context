import { useContext } from "react";

import { Grid, Pagination } from "@mui/material";

import { PokedexContext } from "../../context";

export const HomePagination = () => {
  
  const {page, onChangePage} = useContext(PokedexContext);
  const handlePageChange = (event, value) => {
    onChangePage(value);
  };
  return (
    <Grid container justifyContent="center" marginBottom={2}>
      <Pagination
        color="primary"
        onChange={handlePageChange}
        size="large"
        count={73}
        value={page}
        page={page}
        variant="outlined"
        shape="rounded"
      />
    </Grid>
  );
};
