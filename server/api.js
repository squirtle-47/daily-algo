const express = require("express");

const router = new express.Router();

// Api routes go here: 

//sign up API call:POST to USERS 
  //route: POST /signup
  //send username, password
//login API call: GET from USERS
  //route: POST /login
  //send username, password
//check performance/stats of current user
  //route: GET /stats
//get unique algo from algo table 
  //route: GET /algo
module.exports = router;
