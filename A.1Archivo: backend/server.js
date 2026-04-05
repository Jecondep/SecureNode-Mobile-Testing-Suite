const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de SecureNode Solutions Activa');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
