const { Router } = require('express');
const controllers = require('../controllers');

const postsRoutes = Router();

postsRoutes.post('/', controllers.token.validateToken, controllers.posts.newPost);
postsRoutes.get('/search', controllers.token.validateToken, controllers.posts.findPost);
postsRoutes.get('/', controllers.token.validateToken, controllers.posts.getAllPosts);
postsRoutes.get('/:id', controllers.token.validateToken, controllers.posts.getPostById);
postsRoutes.put('/:id', controllers.token.validateToken, controllers.posts.editPost);
postsRoutes.delete('/:id', controllers.token.validateToken, controllers.posts.deletePost);

module.exports = postsRoutes;