const checkEmail = require('./checkEmail');
const checkPassword = require('./checkPassword');
const createToken = require('./createToken');
const ErrorObject = require('../../helpers/errorObject');
const httpStatusCode = require('../../helpers/httpStatusCode');
const models = require('../../database/models');

const login = async (email, password) => {
  checkEmail(email);
  const user = await models.User.findOne({ where: { email } });
  if (!user) {
  throw new ErrorObject('Invalid fields', httpStatusCode.BAD_REQUEST);
  }
  checkPassword(password, user.password);
  const token = createToken(user);
  return token;
};

module.exports = login;