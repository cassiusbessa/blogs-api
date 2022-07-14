const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const login = controllerWrapper(async (req, res) => {
  const { email, password } = req.body;
  const token = await services.login.login(email, password);
  res.status(200).json({ token });
});

module.exports = login;