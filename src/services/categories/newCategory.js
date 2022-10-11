const models = require('../../database/models');
const { ErrorObject, httpStatusCode } = require('../../helpers');

const newCategory = async (name) => {
  if (!name) {
  throw new ErrorObject('"name" is required', httpStatusCode.BAD_REQUEST);
  }
  const [category, created] = await models.Category.findOrCreate({
    where: { name },
    defaults: { name },
});
  if (!created) {
    throw new ErrorObject('Category already exists', httpStatusCode.CONFLICT);
  }
  return category;
};

module.exports = newCategory;