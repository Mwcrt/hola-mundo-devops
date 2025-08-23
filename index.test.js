const request = require('supertest');
const app = require('./index');

let server;
let port;

beforeAll(() => {
  port = 3000 + Math.floor(Math.random() * 1000); // puerto aleatorio 3000-3999
  server = app.listen(port);
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('Debe devolver Hola Mundo', async () => {
    const res = await request(`http://localhost:${port}`).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hola Mundo desde DevOps CI/CD!');
  });
});
