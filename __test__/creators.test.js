const supertest = require('supertest');
const app = require('../index');
const {generatePath} = require('./testUtils');

describe('it tests routes for the creators controller.', () => {
    it('checks if /creators retrieves a list of all creators', async () => {
        const path = generatePath('creators');
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id retrieves a specific creator', async () => {
        const path = generatePath('creators', false, true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id/comics retrieves a list of all comics the creator is in', async () => {
        const path = generatePath('creators', 'comics', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /creators/:id/series retrieves a list of all series the creator is in', async () => {
        const path = generatePath('creators', 'series', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
    
    it('checks if /creators/:id/stories retrieves a list of all stories the creator is in', async () => {
        const path = generatePath('creators', 'stories', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
});