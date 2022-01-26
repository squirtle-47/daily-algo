const db = require("../models/model");

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");
const { restart } = require("nodemon");

const userController = {};

// define user controllers here

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.username = username;
  const hash = bcrypt.hashSync(password, SALT_WORK_FACTOR);
  const values = [username, hash];
  const text = "INSERT INTO users (username, password) VALUES ($1, $2);";
  db.query(text, values)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      console.log("Error in userController.createUser")
      return next(err);
    });
};

// userController.getUserId = (req, res, next) => {
//   const { username } = req.body;
//   const values = [username];
//   const text = 'SELECT _id FROM users WHERE username=($1)';
// }

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  res.locals.username = username;
  const values = [username];
  const text = "SELECT password FROM users WHERE username=$1;";
  db.query(text, values)
    .then((data) => {
      if (!data.rows.length) next(new Error("Username/password was incorrect"));
      const hash = data.rows[0].password;
      bcrypt.compare(password, hash, (err, result) => {
        if (result) {
          return next();
        } else {
          return next(new Error("Username/password was incorrect"));
        }
      });
    })
    .catch((err) => {
      console.log('Error in userController.verifyUser');
      return next(err);
    });
};

module.exports = userController;
