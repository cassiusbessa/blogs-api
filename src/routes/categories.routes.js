const { Router } = require('express');
const controllers = require('../controllers');

const categoriesRoutes = Router();

categoriesRoutes.post('/', controllers.token.validateToken, controllers.categories.newCategory);
categoriesRoutes.get('/', controllers.token.validateToken, controllers.categories.getAllCategories);

module.exports = categoriesRoutes;