const { Router } = require('express');
const controllers = require('../controllers');

const userRoutes = Router();

userRoutes.post('/', controllers.users.registerUser);

module.exports = userRoutes;