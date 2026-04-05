const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Cambiar por tu clave de MySQL
  database: 'securenode_db'
});

connection.connect((err) => {
  if (err) console.error('Error: ' + err.message);
  console.log('Base de Datos Conectada.');
});

module.exports = connection;
