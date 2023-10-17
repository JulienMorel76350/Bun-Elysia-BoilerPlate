import { Elysia } from "elysia";
import mongoose from "mongoose";

import { users } from "./routes/users";
import { pokemons } from "./routes/pokemons";

const app = new Elysia();

app.group("/api", (app) => app.use(users).use(pokemons));

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL ?? "");
    app.listen(app.server?.port ?? 3000, () =>
      console.log(
        `Server started on port ${app.server?.port}` ??
          "Server started on port 3000 "
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
