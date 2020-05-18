const Users = require('../users/users-model');
const db = require('../database/dbConfig');
const supertest = require('supertest');
const server = require('./server');
const request = supertest(server);



describe('register functionality', () => {
    it('should return status 201', async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          username: "Lambda",
          password: "School"
        });
      expect(res.status).toBe(201);
    });
})