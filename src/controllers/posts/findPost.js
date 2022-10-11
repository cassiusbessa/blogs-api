const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const findPost = controllerWrapper(async (req, res) => {
  const { q } = req.query;
  const result = await services.posts.findPost(q);
  res.status(200).json(result);
});

module.exports = findPost;