const models = require('../../database/models');
const { encryptPassword, ErrorObject, httpStatusCode } = require('../../helpers');
const token = require('../token');
const validateUser = require('./validateUser');

const registerUser = async ({ displayName, email, password, image }) => {
  validateUser(password, email, displayName);
  const passwordEncrypted = encryptPassword(password);
  const [user, created] = await models.User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password: passwordEncrypted, image },      
  });
  if (!created) {
    throw new ErrorObject('User already registered', httpStatusCode.CONFLICT);
  }
  const { password: pass, ...rest } = user;
  const newToken = token.createToken(rest);
  return newToken;
};

module.exports = registerUser;