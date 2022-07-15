const { ErrorObject, httpStatusCode, validEmail } = require('../../helpers');

const checkEmail = (email) => {
  if (!email) {
    throw new ErrorObject('Some required fields are missing', httpStatusCode.BAD_REQUEST); 
  }
  if (!validEmail(email)) {
    throw new ErrorObject('Incorrect email format', httpStatusCode.BAD_REQUEST);
  }
};

module.exports = checkEmail;