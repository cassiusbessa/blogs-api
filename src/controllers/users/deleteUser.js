const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const deleteUser = controllerWrapper(async (req, res) => {
  console.log('chamei deleteUser no controller');
  console.log(req.user);
  const { dataValues: { id: userId } } = req.user;
  console.log(userId);
  await services.users.deleteUser(userId);
  res.status(204).send();
});

module.exports = deleteUser;