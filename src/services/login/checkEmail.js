const ErrorObject = require('../../helpers/errorObject');
const httpStatusCode = require('../../helpers/httpStatusCode');

// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
function validEmail(email) {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

const checkEmail = (email) => {
  if (!email) {
    throw new ErrorObject('Some required fields are missing', httpStatusCode.BAD_REQUEST); 
  }
  if (!validEmail(email)) {
    throw new ErrorObject('Incorrect email format', httpStatusCode.BAD_REQUEST);
  }
};

module.exports = checkEmail;