const express = require("express");
const router = require("./routes/index");
const { conn } = require("./DB_connection");
const server = express();
require("dotenv").config();
const { PORT } = process.env;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, async () => {
  await conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});

module.exports = server;
