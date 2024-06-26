const express = require("express");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/envios", async (req, res) => {
  try {
    const envios = await db.Envio.findAll();
    res.json(envios);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/envios", async (req, res) => {
  try {
    const body = req.body;
    const envio = await db.Envio.create(body);
    res.json(envio);
  } catch (error) {
    res.status(500).json(error);
  }
});

const startServer = async () => {
  try {
    // Connect to the database
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
