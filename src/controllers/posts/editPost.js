const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const editPost = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { dataValues: { id: userId } } = req.user;

  const result = await services.posts.editPost(id, title, content, userId);
  res.status(200).json(result);
});

module.exports = editPost;