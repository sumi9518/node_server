module.exports = class User {
  constructor(name, email, password, gender, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this._id = id;
  }
};
