const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const newPost = controllerWrapper(async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { dataValues: { id } } = req.user;
  const result = await services.posts.newPost(title, content, categoryIds, id);
  res.status(201).json(result);
});

module.exports = newPost;