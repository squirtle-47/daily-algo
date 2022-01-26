const db = require("../models/model");
const algoController = {};

algoController.checkAlgoReceived = (req, res, next) => {
  //query for date_received > today - 24 hours (in ms)
  const todayRange = new Date(new Date() + 86400000).toLocaleString();
  const values = [todayRange];
  const text = "SELECT algo_id FROM users_join_algos WHERE date_received>$1";
  db.query(text, values)
    .then((data) => {
      //if we get something, return users join algos algo_id
      if (data.rows.length > 0) {
        res.locals.received = data.rows[0].algo_id;
        return next();
      } else {
        //if we don't, invoke next
        return next();
      }
    })
    .catch((err) => {
      console.log("Error in checkAlgoReceived", err);
      return next(err);
    });
};

algoController.sendAlgo = (req, res, next) => {
  // adapted from https://stackoverflow.com/questions/17774373/sql-join-many-to-many
  let text;
  let values;
  if (res.locals.received) {
    console.log("we are in the 'if' code block")
    text = `SELECT * FROM algos WHERE _id=$1`;
    values = [res.locals.received];
  } else {
    console.log("we are in the 'else' code block")
    text = `
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
    values = [username];
  }
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
      console.log("error in sendAlgos", err)
      return next(err);
    });
  //{title: "", content: "", example: ""}
};

algoController.receivedDate = (req, res, next) => {
  if(res.locals.received) return next();
  const text =
    "INSERT INTO users_join_algos (username, algo_id, date_received) VALUES ($1, $2, $3);";
  const values = [
    req.cookies.username,
    res.locals._id,
    new Date().toLocaleString(),
  ];
  db.query(text, values)
    .then(() => next())
    .catch((err) => next(err));
};

algoController.submitSolution = (req, res, next) => {
  const { username, algo_id } = req.body;
  const date = new Date().toLocaleString();
  const values = [username, algo_id, date];
  const text = `UPDATE users_join_algos SET date_submitted=$3 WHERE username=$1 AND algo_id=$2;`;
  db.query(text, values)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = algoController;
