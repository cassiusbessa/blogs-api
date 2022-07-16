const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const getAllPosts = controllerWrapper(async (_req, res) => {
  const result = await services.posts.getAllPosts();
  res.status(200).json(result);
});

module.exports = getAllPosts;