const models = require('../../database/models');

const getAllUsers = async () => {
  const result = await models.User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return result;
};

module.exports = getAllUsers;