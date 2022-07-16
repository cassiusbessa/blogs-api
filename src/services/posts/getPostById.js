const models = require('../../database/models');
const { ErrorObject, httpStatusCode } = require('../../helpers');

// dica do stackoverflow: https://stackoverflow.com/questions/30082625/cant-exclude-associations-fields-from-select-statement-in-sequelize

const getPostById = async (id) => {
  const result = await models.BlogPost.findOne({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },  
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
    attributes: { exclude: [models.User.password] }, 
  });
  if (!result) {
    throw new ErrorObject('Post does not exist', httpStatusCode.NOT_FOUND);
 }
  // const result = await models.BlogPost.getAssociatedModel({
  //   joinTableAttributes: [],
  // });

   return result;
};
module.exports = getPostById;