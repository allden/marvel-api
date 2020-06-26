const app = require('../index');
const supertest = require('supertest');
const {generateAuth} = require('../controllers/utils');

const auth = generateAuth();

describe('it tests comic controller routes.', () => {
    it('checks if /comics retrieves all comic instances', async () => {
        const response = await supertest(app).get(`/marvel/comics?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id retrieves the specific comic', async () => {
        const response = await supertest(app).get(`/marvel/comics/1?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id/characters retrieves the comic characters', async () => {
        const response = await supertest(app).get(`/marvel/comics/1/characters?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id/creators retrieves the comic creators', async () => {
        const response = await supertest(app).get(`/marvel/comics/1/creators?${auth}`);
        expect(response.status).toBe(200);
    });
});