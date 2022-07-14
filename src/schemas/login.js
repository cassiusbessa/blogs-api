const Joi = require('joi');

const login = Joi.object({
  password: Joi.string().required().min(6)
    .messages({
      'string.min': '"Password" must be at least 6 characters long',
      'any.required': 'Some required fields are missing',
   }),
  email: Joi.string().required().email()
    .messages({
      'any.required': 'Some required fields are missing',
      'string.email': '"Email" must have the format "email@email.com"',
 }),
}).required();

module.exports = login;