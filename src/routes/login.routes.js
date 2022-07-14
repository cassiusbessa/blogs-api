const { Router } = require('express');
const controllers = require('../controllers');

const loginRouter = Router();

loginRouter.post('/', controllers.login);

module.exports = loginRouter;
