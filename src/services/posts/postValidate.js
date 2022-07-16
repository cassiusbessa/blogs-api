const models = require('../../database/models');
const { ErrorObject, httpStatusCode } = require('../../helpers');

const contentValidate = (title, content, categoryIds, userId) => {
  if (!title || !content || !categoryIds || !userId) {
    throw new ErrorObject(
      'Some required fields are missing', httpStatusCode.BAD_REQUEST,
    );
  }
};

const categoryValidate = async (categoryIds) => {
  const category = await models.Category.findOne({ where: { id: categoryIds } });

  if (!category) {
    throw new ErrorObject(
      '"categoryIds" not found', httpStatusCode.BAD_REQUEST,
    );
}
};

module.exports = {
  contentValidate,
  categoryValidate,
};