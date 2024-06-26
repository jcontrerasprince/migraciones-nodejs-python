import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { Envio } from "./entity/Envio";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_CONNECTION_URI,
  logging: true,
  entities: [Envio],
  subscribers: [],
  migrations: ["./migrations/**.ts"],
});
