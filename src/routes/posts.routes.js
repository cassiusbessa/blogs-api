const { Router } = require('express');
const controllers = require('../controllers');

const postsRoutes = Router();

postsRoutes.post('/', controllers.token.validateToken, controllers.posts.newPost);
postsRoutes.get('/', controllers.token.validateToken, controllers.posts.getAllPosts);

module.exports = postsRoutes;