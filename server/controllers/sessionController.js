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


}

module.exports = sessionController;
