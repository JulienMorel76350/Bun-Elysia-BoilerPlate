import mongoose, { Document } from "mongoose";
import { IPokemon } from "../types/pokemon"

export type PokemonDocument = IPokemon & Document;

const PokemonSchema = new mongoose.Schema<PokemonDocument>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  lv: {
    type: Number,
    required: true,
  },
});

export const Pokemon = mongoose.model<PokemonDocument>("Pokemon", PokemonSchema);

