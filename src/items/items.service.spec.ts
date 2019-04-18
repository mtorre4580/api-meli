import * as supertest from 'supertest';
import { server } from '../index';
import { responseMockSearch, responseMockDetail } from './__mocks__/items.response';

// Mocks
jest.mock('./items.service');

describe('items API', () => {
    
  it('should return all items searching q = ipod', async () => {
    const response = await supertest(server)
      .get('/api/items')
      .query({ q: 'ipod' })
      .set('Host', 'localhost')
      .expect(200);
    expect(response.body).toEqual(responseMockSearch);
  });

  it('should return error with invalid query param', async () => {
    const response = await supertest(server)
      .get('/api/items')
      .query({ q: null })
      .set('Host', 'localhost')
      .expect(500);
    expect(response.body.msg).toEqual('Error to call endpoint');
  });

  it('should return detail item by id', async () => {
    const response = await supertest(server)
      .get('/api/items/MLA772322281')
      .set('Host', 'localhost')
      .expect(200);
    expect(response.body).toEqual(responseMockDetail);
  });

  it('should return error with invalid number item', async () => {
    const response = await supertest(server)
      .get('/api/items/fakeNumber')
      .set('Host', 'localhost')
      .expect(500);
    expect(response.body.msg).toEqual('Error to call endpoint');
  });

});


