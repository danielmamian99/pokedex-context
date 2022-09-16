import { useEffect, useState } from "react";

import { getPokemons } from "../helpers";

export const useFetchPokemons = (page) => {
  const [state, setState] = useState({
    pokemons: [],
    loading: true,
  });
  useEffect(() => {
    getPokemons(page)
      .then((data) => {
        setState({
          pokemons: data,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        setState({
          error: error,
        });
      });
  }, [page]);

  return state;
};
