const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const getPostById = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await services.posts.getPostById(id);
  res.status(200).json(result);
});

module.exports = getPostById;