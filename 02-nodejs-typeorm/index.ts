import "reflect-metadata";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { AppDataSource } from "./data-source";
import { Envio } from "./entity/Envio";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const envioRepository = AppDataSource.getRepository(Envio);

app.get("/envios", async (req, res) => {
  try {
    const envios = await envioRepository.find();
    res.json(envios);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/envios", async (req, res) => {
  try {
    const body = req.body;
    const envio = await envioRepository.save(body);
    res.json(envio);
  } catch (error) {
    res.status(500).json(error);
  }
});

const iniciarServidor = async () => {
  try {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });

    await AppDataSource.initialize();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

iniciarServidor();
