const request = require('supertest');
const app = require('../src/app');

// -----------------------------------------------
// TESTE 1 — Rota principal
// -----------------------------------------------
describe('GET /', () => {
  test('deve retornar status 200', async () => {
    const resposta = await request(app).get('/');
    expect(resposta.status).toBe(200);
  });

  test('deve retornar a chave "mensagem"', async () => {
    const resposta = await request(app).get('/');
    expect(resposta.body).toHaveProperty('mensagem');
  });
});

// -----------------------------------------------
// TESTE 2 — Rota de soma
// -----------------------------------------------
describe('GET /soma', () => {
  test('deve somar 2 + 3 e retornar 5', async () => {
    const resposta = await request(app).get('/soma?a=2&b=3');
    expect(resposta.status).toBe(200);
    expect(resposta.body.resultado).toBe(5);
  });

  test('deve somar números negativos', async () => {
    const resposta = await request(app).get('/soma?a=-10&b=4');
    expect(resposta.body.resultado).toBe(-6);
  });

  test('deve retornar erro 400 se parâmetros forem inválidos', async () => {
    const resposta = await request(app).get('/soma?a=abc&b=3');
    expect(resposta.status).toBe(400);
  });
});

// -----------------------------------------------
// TESTE 3 — Rota de saudação
// -----------------------------------------------
describe('GET /ola/:nome', () => {
  test('deve saudar pelo nome', async () => {
    const resposta = await request(app).get('/ola/Maria');
    expect(resposta.status).toBe(200);
    expect(resposta.body.mensagem).toContain('Maria');
  });
});
