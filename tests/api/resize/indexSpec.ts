import supertest from 'supertest';
import app from '../../../src/index';

const request = supertest(app);
describe('Test for api endpoint', () => {
  it('should get the resize api endpoint', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(200);
  });
});
