const request = require('supertest');
const app = require('./index');

let server;

beforeAll(() => {
  server = app.listen(3000); // levantar servidor solo para tests
});

afterAll((done) => {
  server.close(done); // cerrar servidor al finalizar pruebas
});

describe('GET /', () => {
  it('Debe devolver Hola Mundo', async () => {
    const res = await request(server).get('/');
    expect(res.text).toBe('Hola Mundo desde DevOps CI/CD!');
    expect(res.statusCode).toBe(200);
  });
});
