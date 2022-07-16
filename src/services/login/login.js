const checkEmail = require('./checkEmail');
const checkPassword = require('./checkPassword');
const token = require('../token');
const ErrorObject = require('../../helpers/errorObject');
const httpStatusCode = require('../../helpers/httpStatusCode');
const models = require('../../database/models');

const login = async (email, pass) => {
  checkEmail(email);
  const user = await models.User.findOne({ where: { email } });
  if (!user) {
    throw new ErrorObject('Invalid fields', httpStatusCode.BAD_REQUEST);
  }
  checkPassword(pass, user.password);
  const { password, ...rest } = user;
  const newToken = token.createToken(rest);
  return newToken;
};

module.exports = login;