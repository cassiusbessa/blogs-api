const { Router } = require('express');
const controllers = require('../controllers');

const categoriesRoutes = Router();

categoriesRoutes.post('/', controllers.token.validateToken, controllers.categories.newCategory);

module.exports = categoriesRoutes;