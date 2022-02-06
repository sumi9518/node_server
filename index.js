//step1: import express
const express = require("express");
const userAuthRoutes = require("./user/routes/user-auth-routes");
const bodyParser = require("body-parser");
//step:2 create server
const server = express();

//step:3 listen to port
server.listen(3200, () => {
  console.log("server is listening");
});

server.use(bodyParser.json());

server.use("/api/user/auth", userAuthRoutes);

server.get("/", (req, res) => {
  res.end("Hello from Express & You are Connected!!");
});
