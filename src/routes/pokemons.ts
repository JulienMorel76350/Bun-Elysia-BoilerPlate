import { Elysia, t } from "elysia";
import { getAll, create, deleted } from "../controllers/pokemons";
import {PokemonDTO} from "../types/pokemon"


export const pokemons = new Elysia({ prefix: "/pokemon" })
  .post("/create", ({ body }) => create(body as PokemonDTO))
  .delete("/delete/:id", ({ params: { id } }) => deleted(id))
  .get("/getAll", () => getAll());
