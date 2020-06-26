const supertest = require('supertest');
const app = require('../index');
const {generateAuth} = require('../controllers/utils');

const auth = generateAuth();

describe('it tests routes for the characters controller.', () => {
    it('checks if /characters retrieves a list of all characters', async () => {
        const response = await supertest(app).get(`/marvel/characters?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id retrieves a specific character', async () => {
        const response = await supertest(app).get(`/marvel/characters/1?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id/comics retrieves a list of all comics the character is in', async () => {
        const response = await supertest(app).get(`/marvel/characters/1/comics?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id/series retrieves a list of all series the character is in', async () => {
        const response = await supertest(app).get(`/marvel/characters/1/series?${auth}`);
        expect(response.status).toBe(200);
    });
    
    it('/characters/:id/stories should retrieve a list of all stories the character is in and status 500 if anything is wrong.', async () => {
        const response = await supertest(app).get(`/marvel/characters/1/stories?${auth}`);
        expect(response.status).toBe(200);
    });
});