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
router.get('/algo', (req, res) => {
  res.json({
    title: 'Hard algo problem #123',
    content: "foooooooooooooooooooooobar test test test test test test test",
    examples: ["1", "2", "3"],
  });
})

router.post('/login', (req, res) => {
  if (req.body.username === 'green') {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }
})

router.post('/logout', (req, res) => {
  res.sendStatus(200);
})

module.exports = router;
