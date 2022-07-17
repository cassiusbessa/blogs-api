const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const deletePost = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const { dataValues: { id: userId } } = req.user;
  await services.posts.deletePost(id, userId);
  res.status(204).send();
});

module.exports = deletePost;