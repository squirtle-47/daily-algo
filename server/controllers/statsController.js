const db = require("../models/model");
const statsController = {};

statsController.getStats = (req, res, next) => {
  const text = "SELECT date_submitted, attempts FROM users_join_algos WHERE username=$1";
  const values = [res.locals.username];
  db.query(text, values)
    .then((data) => {
      res.locals.stats = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

statsController.checkIfCompleted = (req, res, next) => {
  const text = "SELECT date_submitted FROM users_join_algos WHERE username=$1 AND algo_id=$2 AND date_submitted IS NOT NULL;"
  const values = [req.cookies.username, req.body.algo_id];
  db.query(text, values)
    .then((data) => {
      if(data.rows.length) res.locals.done = true;
      return next();
    })
    .catch((err) => next(err))
}

statsController.incrementAttempts = (req, res, next) => {
  if(res.locals.done) return next();
  const text = "UPDATE users_join_algos SET attempts = attempts + 1 WHERE username=$1 AND algo_id=$2;"
  const values = [req.cookies.username, req.body.algo_id]
  db.query(text, values)
    .then(data => next())
    .catch(err => next(err));
}

module.exports = statsController;