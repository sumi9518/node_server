const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");

const getUserCollection = () => {
  return db.getCollection("user");
};

exports.addUser = (model, cb) => {
  //access collection
  getUserCollection()
    .insertOne({
      name: model.name,
      email: model.email,
      password: model.password,
      gender: model.gender,
    })
    .then(
      () => {
        cb();
      },
      (err) => {
        throw new Error(err);
      }
    );
};

exports.updateUser = (model, cb) => {
  //Step1: get collection
  //step2: define how to find document
  // console.log(model._id);
  const filter = { _id: ObjectId(model._id) };

  //step 3: define properties to update
  const update = {
    $set: {
      name: model.name,
      email: model.email,
      password: model.password,
      gender: model.gender,
    },
  };

  getUserCollection()
    .findOneAndUpdate(filter, update)
    .then(
      () => {
        cb();
      },
      (err) => {
        console.log(err);
      }
    );
};

exports.getUserById = (id, cb) => {
  getUserCollection()
    .findOne({ _id: ObjectId(id) })
    .then(
      (user) => {
        cb(user);
      },
      (err) => {
        console.log(err);
      }
    );
};

exports.deleteUser = (id, cb) => {
  getUserCollection()
    .deleteOne({ _id: ObjectId(id) })
    .then(() => cb(),
  err => {console.log(err)});
};
