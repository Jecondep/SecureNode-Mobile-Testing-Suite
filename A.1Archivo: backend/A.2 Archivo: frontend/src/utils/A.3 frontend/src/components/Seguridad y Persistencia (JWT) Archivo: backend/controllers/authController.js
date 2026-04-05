const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { email, password } = req.body;
  // Simulación de validación de usuario
  const token = jwt.sign({ email }, 'SECRET_KEY_SECURENODE', { expiresIn: '24h' });
  res.json({
    message: "Autenticación exitosa",
    token: token
  });
};
