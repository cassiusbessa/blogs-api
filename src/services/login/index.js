const login = require('./login');
const encryptPassword = require('./encryptPassword');
const validateToken = require('./validateToken');

module.exports = {
  encryptPassword,
  validateToken,
  login,
};