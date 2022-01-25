const db = require('../models/userModel');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userController = {};

// define user controllers here

userController.createUser = (req, res, next) => {

};

userController.verifyUser = (req, res, next) => {

};

module.exports = userController;
