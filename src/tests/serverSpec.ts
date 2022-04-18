import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);
//#region check the response from endpoints server
describe('Test responses from endpoints', (): void => {
  it('server working /', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it('gets the api/images endpoint and returns a 400 error if no parameters are set', async (): Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });
});
//#region
