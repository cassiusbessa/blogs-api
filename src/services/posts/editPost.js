const models = require('../../database/models');
const checkUserPost = require('./checkUserPost');
const { ErrorObject, httpStatusCode } = require('../../helpers');

// dica do stackoverflow: https://stackoverflow.com/questions/30082625/cant-exclude-associations-fields-from-select-statement-in-sequelize

const editPostValidator = (postId, title, content) => { 
  if (!postId || !title || !content) {
    throw new ErrorObject('Some required fields are missing', httpStatusCode.BAD_REQUEST);
  }
};

const editPost = async (postId, title, content, userId) => {
  const post = await models.BlogPost.findOne({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },  
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id: postId },
    attributes: { exclude: [models.User.password] }, 
  });
  editPostValidator(postId, title, content);
  checkUserPost(post, userId);
  post.title = title;
  post.content = content;
   await post.save();
   return post;
};

module.exports = editPost;