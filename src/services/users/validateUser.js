const { ErrorObject, httpStatusCode, validEmail } = require('../../helpers');

const validateUser = (password, email, displayName) => {
  if (password.length < 6) {
    throw new ErrorObject(
    '"password" length must be at least 6 characters long', httpStatusCode.BAD_REQUEST,
); 
  }
  if (!validEmail(email)) {
    throw new ErrorObject('"email" must be a valid email', httpStatusCode.BAD_REQUEST);
  }
if (displayName.length < 8) {
  throw new ErrorObject(
    '"displayName" length must be at least 8 characters long', httpStatusCode.BAD_REQUEST,
);
}
}; 

module.exports = validateUser;