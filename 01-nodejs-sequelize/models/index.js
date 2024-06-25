const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_URI, {
  sync: true
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const Envio = sequelize.define("Envio", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  desde: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hasta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entrega_estimada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  creado: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  actualizado: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

db.Envio = Envio;

module.exports = db;