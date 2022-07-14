const bcrypt = require('bcrypt');
const ErrorObject = require('../../helpers/errorObject');
const httpStatusCode = require('../../helpers/httpStatusCode');

const checkPassword = (password, passwordDb) => {
//   if (!password) {
//   throw new ErrorObject('Some required fields are missing', httpStatusCode.BAD_REQUEST); 
// }
  const isMatch = bcrypt.compareSync(password, passwordDb) || (password === passwordDb);
  if (!isMatch) throw new ErrorObject('Invalid fields', httpStatusCode.BAD_REQUEST);
};

module.exports = checkPassword;