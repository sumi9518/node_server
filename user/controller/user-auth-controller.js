exports.register = (req, res) => {
  console.log("this is register request");
  res.send("This is Register");
};

exports.login = (req, res) => {
  console.log("this is login request");
  res.send("This is login");
};
