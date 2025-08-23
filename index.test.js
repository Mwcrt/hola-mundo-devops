const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('Debe devolver Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo desde DevOps CI/CD!');
    expect(res.statusCode).toBe(200);
  });
});
