const app = require('../index');
const supertest = require('supertest');
const {generatePath} = require('./testUtils');

describe('it tests comic controller routes.', () => {
    it('checks if /comics retrieves all comic instances', async () => {
        const path = generatePath('comics');
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id retrieves the specific comic', async () => {
        const path = generatePath('comics', false, true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id/characters retrieves the comic characters', async () => {
        const path = generatePath('comics', 'characters', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });

    it('checks if /comics/:id/creators retrieves the comic creators', async () => {
        const path = generatePath('comics', 'creators', true);
        const response = await supertest(app).get(path);
        expect(response.status).toBe(200);
    });
});