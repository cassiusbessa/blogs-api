const models = require('../../database/models');
const { encryptPassword, createToken, ErrorObject, httpStatusCode } = require('../../helpers');
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
  const token = createToken(rest);
  return token;
};

module.exports = registerUser;