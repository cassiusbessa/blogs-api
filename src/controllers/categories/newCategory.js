const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const newCategory = controllerWrapper(async (req, res) => {
  const { name } = req.body;
  const result = await services.categories.newCategory(name);
  res.status(201).json(result);
});

module.exports = newCategory;