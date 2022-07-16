const models = require('../../database/models');
const { ErrorObject, httpStatusCode } = require('../../helpers');

const getUserById = async (id) => {
  const result = await models.User.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
  });
  if (!result) {
     throw new ErrorObject('User does not exist', httpStatusCode.NOT_FOUND);
  }
return result;
};

module.exports = getUserById;