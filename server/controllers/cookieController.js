const cookieController = {};
const db = require('../models/model');

cookieController.setSSIDCookie = (req, res, next) => {
  const text = "SELECT _id FROM sessions WHERE username=($1);";
  const values = [res.locals.username];
  db.query(text, values)
    .then((data) => {
      res.cookie("ssid", data.rows[0]._id, { httpOnly: true });
      res.cookie("username", res.locals.username);
      return next();
    })
    .catch((err) => {
      console.log("Error in cookieController.setSSIDCookie")
      return next(err);
    });
  //res.locals.sessionCookie = res.cookie('ssid', res.locals.ssid, { httpOnly: true });
};

module.exports = cookieController;
