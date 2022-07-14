const bcrypt = require('bcrypt');

const checkPassword = (password, passwordDb) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) {
    const e = new Error('Usuário não existe ou senha inválida');
    e.name = 'UnauthorizedError';
  throw e;
}
};