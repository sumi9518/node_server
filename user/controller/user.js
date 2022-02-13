const userModel = require("../models/user");
const useRepo = require("../repositories/user");

exports.updateUser = (req, res) => {
  const userToUpdate = new userModel(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.gender,
    req.body._id
  );
  useRepo.updateUser(userToUpdate, () => {
    res.send("Data is updated");
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  useRepo.getUserById(id, (user) => {
      res.status(200).send(user);
  });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    useRepo.deleteUser(id, () => {
        res.status(200).send("Data Deleted");
    })
}