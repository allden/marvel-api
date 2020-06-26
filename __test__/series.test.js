const supertest = require('supertest');
const app = require('../index');
const {generateAuth} = require('../controllers/utils')

const auth = generateAuth();

describe('it tests routes for the series controller.', () => {
    it('checks if /series retrieves all series', async () => {
        const response = await supertest(app).get(`/marvel/series?${auth}`);
        expect(response.status).toBe(200);
    });
    
    it('checks if /series/:id retrieves a specific series', async () => {
        const response = await supertest(app).get(`/marvel/series/1?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /series/:id/characters gets all characters from the series', async () => {
        const response = await supertest(app).get(`/marvel/series/1/characters?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /series/:id/creators gets all creators for the specific series', async () => {
        const response = await supertest(app).get(`/marvel/series/1/creators?${auth}`);
        expect(response.status).toBe(200);
    });
});