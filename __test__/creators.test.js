const supertest = require('supertest');
const app = require('../index');
const {generateAuth} = require('../controllers/utils');

const auth = generateAuth();

describe('it tests routes for the creators controller.', () => {
    it('checks if /creators retrieves a list of all creators', async () => {
        const response = await supertest(app).get(`/marvel/creators?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id retrieves a specific creator', async () => {
        const response = await supertest(app).get(`/marvel/creators/1?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id/comics retrieves a list of all comics the creator is in', async () => {
        const response = await supertest(app).get(`/marvel/creators/1/comics?${auth}`);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id/series retrieves a list of all series the creator is in', async () => {
        const response = await supertest(app).get(`/marvel/creators/1/series?${auth}`);
        expect(response.status).toBe(200);
    });
    
    it('checks if /creators/:id/stories retrieves a list of all stories the creator is in', async () => {
        const response = await supertest(app).get(`/marvel/creators/1/stories?${auth}`);
        expect(response.status).toBe(200);
    });
});