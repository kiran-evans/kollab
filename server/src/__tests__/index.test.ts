import request from 'supertest';
import { initDb, server } from '../index';

describe("Test index.ts", () => {
    beforeAll(async () => {
        await initDb();
    });

    it("should respond with 404", async () => {
        const res = await request(server).get("/");
        expect(res.statusCode).toEqual(404);
    });

    it("should respond with 200", async () => {
        const res = (await request(server).get("/api/post?limit=5&offset=0"));
        expect(res.statusCode).toEqual(200);
    });

    afterAll(() => {
        server.close();
    });
});