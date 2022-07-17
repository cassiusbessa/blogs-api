const { Op } = require('sequelize');
// const { ErrorObject, httpStatusCode } = require('../../helpers');

const models = require('../../database/models');

const findPost = async (value) => {
  const result = await models.BlogPost.findAll({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },  
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: [models.User.password] },
    where: {
      [Op.or]: [
        { title: { [Op.substring]: value } },
        { content: { [Op.substring]: value } },
      ],
    }, 
  });

  return result;
};

module.exports = findPost;