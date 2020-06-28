const supertest = require('supertest');
const app = require('../index');
const {generatePath} = require('./testUtils');

describe('it tests routes for the stories controller.', () => {
    it('checks if /stories retrieves all stories', async () => {
        const path = generatePath('stories');
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /stories/:id retrieves a specific story', async () => {
        const path = generatePath('stories', false, true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /stories/:id/characters retrieves all characters for a story', async () => {
        const path = generatePath('stories', 'characters', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
    
    it('checks if /stories/:id/creators retrieves all creators of a story', async () => {
        const path = generatePath('stories', 'creators', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
});