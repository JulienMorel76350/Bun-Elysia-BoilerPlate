import { Elysia } from "elysia";
import { register } from "../controllers/userscontroller";

export const users = new Elysia({ prefix: "/users" })
  .post("/register", () => {console.log(register);})
  .post("/sign-up", () => "")
  .get("/", () => "test");


