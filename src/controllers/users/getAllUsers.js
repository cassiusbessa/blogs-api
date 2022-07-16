const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const getAllUsers = controllerWrapper(async (_req, res) => {
  const result = await services.users.getAllUsers();
  res.status(200).json(result);
});

module.exports = getAllUsers;