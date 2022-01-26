const db = require("../models/model");
const algoController = {};

algoController.sendAlgo = (req, res, next) => {
  // adapted from https://stackoverflow.com/questions/17774373/sql-join-many-to-many
  const text = `
    SELECT algos.* FROM algos
    LEFT OUTER JOIN users_join_algos
      ON algos._id = users_join_algos.algo_id
     AND users_join_algos.username = $1
    WHERE username IS NULL
    ORDER BY RANDOM()
    LIMIT 1
  ;`;
  //query joint table for algo_id where username=username
  //query algo table for everything that was not in the first query
  const { username } = req.body;
  const values = [username];
  db.query(text, values)
    .then((data) => {
      const { _id, title, content, example } = data.rows[0];
      res.locals._id = _id;
      res.locals.title = title;
      res.locals.content = content;
      res.locals.examples = example;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
  //{title: "", content: "", example: ""}
};

algoController.submitSolution = (req, res, next) => {
  const { username, algo_id } = req.body;
  const date = new Date().toLocaleString();
  const values = [username, algo_id, date];
  const text = `INSERT INTO users_join_algos 
                (username, algo_id, date) VALUES ($1, $2, $3);`;
  db.query(text, values)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      return nextends(err);
    })
};

module.exports = algoController;
