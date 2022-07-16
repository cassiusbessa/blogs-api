const models = require('../../database/models');

const getAllCategories = async () => {
  const result = await models.Category.findAll();
  return result;
};

module.exports = getAllCategories;