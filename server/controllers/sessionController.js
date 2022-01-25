const db = require('../models/sessionModel');

const sessionController = {};

sessionController.startSession = (req, res, next) => {
  // create a session and store in the database
  const text = 'INSERT INTO sessions VALUES ($1);';
  const values = [ res.locals.ssid ];
  db.query(text, values)
  .then(res => {
    return next();
  })
  .catch((err) => {
    return next(err);
  });
}

sessionController.isLoggedIn = (req, res, next) => {
  // search for session in database


}

module.exports = sessionController;
