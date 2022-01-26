const db = require('../models/model');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  // create a session and store in the database
  const text = 'INSERT INTO sessions (username) VALUES ($1);';
  const values = [ res.locals.username ];
  db.query(text, values)
  .then(res => {
    return next();
  })
  .catch((err) => {
    console.log("Error in sessionController.startSession");
    return next(err);
  });
}

sessionController.isLoggedIn = (req, res, next) => {
  // search for session in database
  const text = 'SELECT username FROM sessions WHERE _id=$1;'
  const values = [req.cookies.ssid];
  db.query(text, values)
    .then((data) => {
      if(!data.rows.length) return next(new Error("Not authorized"));
      res.locals.username = data.rows[0].username;
      return next()
    })
    .catch((err) => next(err))
}

module.exports = sessionController;
