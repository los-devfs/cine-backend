import supertest from "supertest";
import api from "../api.js";
import * as database from "./database.js";

const agent = supertest.agent(api);

describe('GenreUpdateTest', () => {
    test('Update Genre', async () => {
      await database.connect();
      const response = await agent.put('/genre/:id').send({
        author: "Drama",
      });
      expect(response.statusCode).toEqual(200);
      await database.close();
    });
  });
