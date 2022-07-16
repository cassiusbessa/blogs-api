const token = require('../../services/token');
const controllerWrapper = require('../../helpers/controllerWrapper');

const validateToken = controllerWrapper(async (req, _res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const user = token.validateToken(authorization);
  console.log(user);
  req.user = user;
  next();
});

module.exports = validateToken;
// const validateToken = async (req, _res, next) => {
//   const { authorization } = req.headers;
//   const user = token.validateToken(authorization);
//   req.user = user;
//   next();
// 