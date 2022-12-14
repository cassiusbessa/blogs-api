const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  };

module.exports = encryptPassword;