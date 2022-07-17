const models = require('../../database/models');
const checkUserPost = require('./checkUserPost');
// const { ErrorObject, httpStatusCode } = require('../../helpers');

const deletePost = async (postId, userId) => {
  const post = await models.BlogPost.findOne({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },  
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id: postId },
    attributes: { exclude: [models.User.password] }, 
  }); 
  checkUserPost(post, userId);
  await post.destroy();
 };

 module.exports = deletePost;