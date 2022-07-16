const models = require('../../database/models');

const getAllUsers = async () => {
  const result = await models.User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

module.exports = getAllUsers;