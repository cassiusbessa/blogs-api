const { Router } = require('express');
const controllers = require('../controllers');

const postsRoutes = Router();

postsRoutes.post('/', controllers.token.validateToken, controllers.posts.newPost);

module.exports = postsRoutes;