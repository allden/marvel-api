const supertest = require('supertest');
const app = require('../index');
const {generatePath} = require('./testUtils');

describe('it tests routes for the series controller.', () => {
    it('checks if /series retrieves all series', async () => {
        const path = generatePath('series');
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
    
    it('checks if /series/:id retrieves a specific series', async () => {
        const path = generatePath('series', false, true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /series/:id/characters gets all characters from the series', async () => {
        const path = generatePath('series', 'characters', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /series/:id/creators gets all creators for the specific series', async () => {
        const path = generatePath('series', 'creators', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
});