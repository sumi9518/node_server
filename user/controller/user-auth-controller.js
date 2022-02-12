
const userModel = require("../models/user");
const userRepo = require("../repositories/user")

exports.register = (req, res) => {
  const newUser = new userModel(req.body.name, req.body.email, req.body.password, req.body.gender)
  userRepo.addUser(newUser, () => {
    res.send("User is added")
  })
  
};

exports.login = (req, res) => {
  console.log("this is login request");
  res.send("This is login");
};
