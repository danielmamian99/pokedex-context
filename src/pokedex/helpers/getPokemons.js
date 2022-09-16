import { pokemonApi } from "../../api/pokemonApi";

export const getPokemons = async (page) => {
  const {
    data: { results },
  } = await pokemonApi.get(`/pokemon?limit=12&offset=${page * 12}`);

  return results;
};
