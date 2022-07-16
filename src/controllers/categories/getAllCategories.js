const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const getAllCategories = controllerWrapper(async (_req, res) => {
  const result = await services.categories.getAllCategories();
  res.status(200).json(result);
});

module.exports = getAllCategories;