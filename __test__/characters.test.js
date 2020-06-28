const supertest = require('supertest');
const app = require('../index');
const {generatePath} = require('./testUtils');

describe('it tests routes for the characters controller.', () => {
    it('checks if /characters retrieves a list of all characters', async () => {
        const path = generatePath('characters');
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id retrieves a specific character', async () => {
        const path = generatePath('characters', false, true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id/comics retrieves a list of all comics the character is in', async () => {
        const path = generatePath('characters', 'comics', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /characters/:id/series retrieves a list of all series the character is in', async () => {
        const path = generatePath('characters', 'series', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
    
    it('/characters/:id/stories should retrieve a list of all stories the character is in and status 500 if anything is wrong.', async () => {
        const path = generatePath('characters', 'stories', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
});