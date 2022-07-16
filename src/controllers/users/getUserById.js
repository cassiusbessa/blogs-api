const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const getUserById = controllerWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await services.users.getUserById(id);
  res.status(200).json(result);
});

module.exports = getUserById;