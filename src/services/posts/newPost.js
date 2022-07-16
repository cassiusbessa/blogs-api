const Sequelize = require('sequelize');
const models = require('../../database/models');
const config = require('../../database/config/config');
const validate = require('./postValidate');

const sequelize = new Sequelize(config.development);

// Anderson, sim, ele mesmo, me ensinou a usar o add do sequelize.
  
  const newPost = async (title, content, categoryIds, userId) => {
    validate.contentValidate(title, content, categoryIds, userId);
    await validate.categoryValidate(categoryIds);
    const result = await sequelize.transaction(async (t) => {
    const post = await models.BlogPost.create({ title, content, userId }, { transaction: t });
    // const postCategory = await models.PostCategory.create({ postId: post.id, categoryId });
    await post.addCategory(categoryIds, { transaction: t }); 
    return post;
  });
  return result;
};

module.exports = newPost;
