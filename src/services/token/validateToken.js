require('dotenv/config');
const jwt = require('jsonwebtoken');
const ErrorObject = require('../../helpers/errorObject');
const httpStatusCode = require('../../helpers/httpStatusCode');

const validateToken = (token) => {
  if (!token) throw new ErrorObject('Token not found', httpStatusCode.UNAUTHORIZED);
  try {
  const { data } = jwt.verify(token, process.env.JWT_SECRET);
  console.log('console.log em validateToken', data);
  return data;
  } catch (_err) {
    console.log('gerei erro');
  const e = new ErrorObject('Expired or invalid token', httpStatusCode.UNAUTHORIZED);
  throw e;
}
};

module.exports = validateToken;