const express = require("express");

const router = new express.Router();

const cookieController = require("./controllers/cookieController.js");
const sessionController = require("./controllers/sessionController.js");
const userController = require("./controllers/userController.js");
const algoController = require("./controllers/algoController.js");
const statsController = require("./controllers/statsController.js");
// Api routes go here:

//sign up API call:POST to USERS
//route: POST /signup
//send username, password
router.post(
  "/signup",
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200).json("Added user!");
  }
);

//login API call: GET from USERS
//route: POST /login
//send username, password
router.post(
  "/login",
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    res.status(200).json("Logged in!");
  }
);

//check performance/stats of current user
//route: GET /stats
router.get(
  "/stats",
  sessionController.isLoggedIn,
  statsController.getStats,
  (req, res) => {
    res.status(200).json({ dates: res.locals.dates });
  }
);
//get unique algo from algo table
//route: GET /algo
router.get(
  "/algo",
  sessionController.isLoggedIn,
  algoController.checkAlgoReceived,
  algoController.sendAlgo,
  algoController.receivedDate,
  (req, res) => {
    res.status(200).json({
      algo_id: res.locals._id,
      title: res.locals.title,
      content: res.locals.content,
      examples: res.locals.examples,
      tests: res.locals.tests
    });
  }
);

//submit solution to database
//route: POST /submit
router.post(
  "/submit",
  sessionController.isLoggedIn,
  algoController.submitSolution,
  (req, res) => {
    res.sendStatus(200);
  }
);

//clear cookies/logout
//route: POST /logout
router.post("/logout", (req, res) => {
  res.clearCookie("ssid");
  res.clearCookie("username");
  res.sendStatus(200);
});
module.exports = router;
