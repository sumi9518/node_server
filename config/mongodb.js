//Step 1: import mongodb library
const mongoDBClient = require("mongodb").MongoClient;
require("dotenv").config();

//step 2: get connection string
const url = process.env.MONGODB;
// console.log(url);



//step 3: Connect to mongodb

var getClient;

exports.connect = () => {
  mongoDBClient.connect(url).then(
      (client) => {
          getClient = client;
      console.log("MongoDB connected");
    },
    (err) => {
      console.log(err);
    }
  );
};

exports.getCollection = (name) => {
    return getClient.db("TwitterApp").collection(name);
}