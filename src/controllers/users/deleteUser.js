const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const deleteUser = controllerWrapper(async (req, res) => {
  console.log(req.user);
  const { id: userId } = req.user;
  await services.users.deleteUser(userId);
  res.status(204).send();
});

module.exports = deleteUser;