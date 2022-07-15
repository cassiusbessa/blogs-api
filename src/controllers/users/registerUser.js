const services = require('../../services');
const controllerWrapper = require('../../helpers/controllerWrapper');

const registerUser = controllerWrapper(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await services.users.registerUser({ displayName, email, password, image });
  res.status(201).json({ token });
});

module.exports = registerUser;