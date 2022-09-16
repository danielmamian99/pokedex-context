import { useEffect, useState } from "react";

import { getPokemon } from "../helpers";

export const useFetchPokemon = (category) => {
  const [state, setState] = useState({
    pokemon: [],
    loading: true,
    error: false,
  });
  useEffect(() => {
    getPokemon(category)
      .then((pokemonData) => {
        setState({
          pokemon: pokemonData,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        setState({
          error: error,
          loading: false,
        });
      });
  }, [category]);

  return state;
};
