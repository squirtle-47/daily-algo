const sessionController = {};

sessionController.startSession = (req, res, next) => {
  // create a session and store in the database

}

sessionController.isLoggedIn = (req, res, next) => {
  // search for session in database
    // if exists,
    // res.locals.ssid = req.cookies.ssid;
}

module.exports = sessionController;
