import { Pokemon , PokemonDocument } from "../models/pokemons";
import { IPokemon, PokemonDTO } from "../types/pokemon";
import { APIResponse } from "../types/api-response";

export const getAll = async (): Promise<APIResponse<IPokemon[]>> => {
  const pokemons = await Pokemon.find();

  return {
    success: true,
    data: pokemons,
  };
};

export const create = async (data: PokemonDTO): Promise<APIResponse<IPokemon>> => {
  const { name, type, lv } = data;

  const newPokemon = await Pokemon.create({ name: name, type: type, lv: lv });

  return {
    success: true,
    data: newPokemon,
}};
/*
export const deleted = async (id: String): Promise<APIResponse<IPokemon>> => {

  const deletedPokemon = await Pokemon.findByIdAndDelete({ _id : id});

  return {
    success: true,
    data: deletedPokemon,
  };
};
*/