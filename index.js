//step1: import express
const express = require("express");

//step:2 create server
const server = express();

//step:3 listen to port
server.listen(3200, () => {
  console.log("server is listening");
});

server.get("/", (req, res) => {
  res.end("Hello from Express & You are Connected!!");
});
