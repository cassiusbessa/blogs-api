const models = require('../../database/models');
// const { ErrorObject, httpStatusCode } = require('../../helpers');

// const checkUser = (deleteId, userId) => deleteId === userId; 

const deleteUser = async (userId) => {
  console.log('>>>>>>>> userId no service: ', userId);
  const result = await models.User.findOne({
  where: { id: userId },
  attributes: { exclude: ['password'] },
  });
  // if (checkUser(deleteId, userId)) {
  //    throw new ErrorObject('User does not exist', httpStatusCode.NOT_FOUND);
  // }
  await result.destroy();
  return result;
};

module.exports = deleteUser;