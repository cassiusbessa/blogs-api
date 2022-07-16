const models = require('../../database/models');

// dica do stackoverflow: https://stackoverflow.com/questions/30082625/cant-exclude-associations-fields-from-select-statement-in-sequelize

const getAllPosts = async () => {
  // const result = await models.BlogPost.findAll({ include: [models.User, models.Category] });
  const result = await models.BlogPost.findAll({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },  
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: [models.User.password] }, 
  });
  // const result = await models.BlogPost.getAssociatedModel({
  //   joinTableAttributes: [],
  // });

   return result;
};
module.exports = getAllPosts;