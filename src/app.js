const express = require('express');
const app = express();

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API funcionando!',
    versao: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Rota de soma
app.get('/soma', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro:
      'Parâmetros inválidos. Use ?a=5&b=3'
    });
  }

  res.json({ resultado: a - b });
});

// Rota de saudação
app.get('/ola/:nome', (req, res) => {
  const { nome } = req.params;
  res.json({ mensagem: `Olá, ${nome}! Bem-vindo ao CI/CD.` });
});

module.exports = app;
