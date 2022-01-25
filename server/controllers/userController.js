const db = require("../models/userModel");

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");
const { restart } = require("nodemon");

const userController = {};

// define user controllers here

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, SALT_WORK_FACTOR);
  const values = [username, hash];
  const text = "INSERT INTO users (username, password) VALUES ($1, $2);";
  db.query(text, values)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const values = [username];
  const text = "SELECT _id, password FROM users WHERE username=$1;";
  db.query(text, values)
    .then((data) => {
      if (!data.rows.length) next(new Error("Username/password was incorrect"));
      const hash = data.rows[0].password;
      bcrypt.compare(password, hash, (err, res) => {
        if (res) {
          res.locals.id = data.rows[0]._id;
          return next();
        } else {
          return next(new Error("Username/password was incorrect"));
        }
      });
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = userController;
