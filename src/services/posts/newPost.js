const Sequelize = require('sequelize');
const models = require('../../database/models');
const config = require('../../database/config/config');
const { ErrorObject, httpStatusCode } = require('../../helpers');

const sequelize = new Sequelize(config.development);

// Anderson, sim, ele mesmo, me ensinou a usar o add do sequelize.
  
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
  const newPost = async (title, content, categoryIds, userId) => {
    contentValidate(title, content, categoryIds, userId);
    await categoryValidate(categoryIds);
    const result = await sequelize.transaction(async (t) => {
    const post = await models.BlogPost.create({ title, content, userId }, { transaction: t });
    await post.addCategory(categoryIds, { transaction: t }); 
    return post;
  });
  return result;
};

module.exports = newPost;
