const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const text = "SELECT _id FROM sessions WHERE user_id=($1);";
  const values = [res.locals.id];
  db.query(text, values)
    .then((res) => {
      res.cookie("ssid", res.rows[0]._id, { httpOnly: true });
    })
    .catch((err) => {
      return next(err);
    });

  //res.locals.sessionCookie = res.cookie('ssid', res.locals.ssid, { httpOnly: true });
  return next();
};

cookieController.setUserCookie = (req, res, next) => {
  const text = "SELECT username FROM users WHERE _id=($1);";
  const values = [res.locals.id];
  db.query(text, values)
    .then((res) => {
      res.cookie("username", res.rows[0].username, { httpOnly: true });
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = cookieController;
