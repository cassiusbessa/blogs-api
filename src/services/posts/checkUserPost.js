const { ErrorObject, httpStatusCode } = require('../../helpers');

const checkUserPost = (post, userId) => {
  if (!post) {
    throw new ErrorObject('Post does not exist', httpStatusCode.NOT_FOUND);
    }
  if (post.user.id !== userId) {
    throw new ErrorObject('Unauthorized user', httpStatusCode.UNAUTHORIZED);
  }
};

module.exports = checkUserPost;