import { Pokemon } from "pokenode-ts";

export const name = (pokemon: Pokemon): string => pokemon.name;
export const id = (pokemon: Pokemon): number => pokemon.id;
export const types = (pokemon: Pokemon): string[] => pokemon.types.map((type) => type.type.name);