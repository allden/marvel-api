const supertest = require('supertest');
const app = require('../index');
const {generateAuth} = require('../controllers/utils');

const auth = generateAuth();

describe('it tests routes for the stories controller.', () => {
    it('checks if /stories retrieves all stories', async () => {
        const response = await supertest(app).get(`/marvel/stories?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /stories/:id retrieves a specific story', async () => {
        const response = await supertest(app).get(`/marvel/stories/1?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /stories/:id/characters retrieves all characters for a story', async () => {
        const response = await supertest(app).get(`/marvel/stories/1/characters?${auth}`);
        expect(response.status).toBe(200);
    });
    
    it('checks if /stories/:id/creators retrieves all creators of a story', async () => {
        const response = await supertest(app).get(`/marvel/stories/1/creators?${auth}`);
        expect(response.status).toBe(200);
    });
});