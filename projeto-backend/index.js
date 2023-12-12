const express = require('express');
const mongoose = require('mongoose');
const placaRoutes = require('./routes/placaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Conectar ao MongoDB (altere a URL para a sua configuração do MongoDB)
mongoose.connect('mongodb://localhost:27017/seu-banco-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', placaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
