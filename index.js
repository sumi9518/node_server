//step1: import express
const express = require("express");
const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes")
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");

//step:2 create server
const server = express();

//step:3 listen to port
server.listen(3200, () => {
  console.log("server is listening");
});

// Connect to mongodb
mongodb.connect();

server.use(bodyParser.json());

server.use("/api/user/auth", userAuthRoutes);
server.use("/api/user", userRoutes);

server.use((req, res) => {
  res.status(400).send("Please Check our Path")
})

server.get("/", (req, res) => {
  res.end("Hello from Express & You are Connected!!");
});
