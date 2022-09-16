import { pokemonApi } from "../../api/pokemonApi";

export const getPokemon = async (category) => {
  const {
    data: { id, height, types, weight, name, order, sprites, abilities, stats },
  } = await pokemonApi.get(`/pokemon/${category}`);
  return {
    id,
    height,
    types,
    weight,
    name,
    order,
    abilities,
    stats,
    img: sprites.other["official-artwork"]["front_default"],
  };
};
