const models = require('../../database/models');
const { ErrorObject, httpStatusCode } = require('../../helpers');

// dica do stackoverflow: https://stackoverflow.com/questions/30082625/cant-exclude-associations-fields-from-select-statement-in-sequelize

const editPostValidator = (postId, title, content) => { 
  if (!postId || !title || !content) {
    throw new ErrorObject('Some required fields are missing', httpStatusCode.BAD_REQUEST);
  }
};

const foundPost = (post, userId) => {
  if (!post) {
    throw new ErrorObject('Post does not exist', httpStatusCode.NOT_FOUND);
    }
  if (post.user.id !== userId) {
    throw new ErrorObject('Unauthorized user', httpStatusCode.UNAUTHORIZED);
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
//   if (!post) {
//     throw new ErrorObject('Post does not exist', httpStatusCode.NOT_FOUND);
//  }
//   if (post.user.id !== userId) {
//     throw new ErrorObject('Unauthorized user', httpStatusCode.UNAUTHORIZED);
//   }
  editPostValidator(postId, title, content);
  foundPost(post, userId);
  post.title = title;
  post.content = content;
   await post.save();
   return post;
};

module.exports = editPost;