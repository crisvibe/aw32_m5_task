const app = require('../app.js');
const request = require('supertest');

it('DELETE /dishes - name', async () => {
  
  const response = await request(app).delete('/dishes').send({
    dishName: "burger"
  })

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('message', 'Dish delete successfully'); // Or line removed
});