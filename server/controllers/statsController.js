const db = require("../models/model");
const statsController = {};

statsController.getStats = (req, res, next) => {
  const text = "SELECT date_submitted FROM users_join_algos WHERE username=$1 AND date_submitted IS NOT NULL";
  const values = [res.locals.username];
  db.query(text, values)
    .then((data) => {
      console.log(data.rows)
      res.locals.dates = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = statsController;