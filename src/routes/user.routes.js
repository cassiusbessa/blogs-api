const { Router } = require('express');
const controllers = require('../controllers');

const userRoutes = Router();

userRoutes.post('/', controllers.users.registerUser);
userRoutes.get('/', controllers.token.validateToken, controllers.users.getAllUsers);
userRoutes.delete('/me', controllers.token.validateToken, controllers.users.deleteUser);
userRoutes.get('/:id', controllers.token.validateToken, controllers.users.getUserById);

module.exports = userRoutes;