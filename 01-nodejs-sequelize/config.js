const fs = require("fs");
require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_CONNECTION_URI,
    dialect: "postgres",
  },
};
