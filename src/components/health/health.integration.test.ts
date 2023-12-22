import { OK } from "http-status";
import { SuperAgentTest } from "supertest";

import { initAgent } from "~/helpers";

let agent: SuperAgentTest;

beforeAll(async () => {
  agent = await initAgent();
});

describe("Health Check", () => {
  describe("GET: '/'", () => {
    it("should return OK", async () => {
      const res = await agent.get("/api/v1/health");

      expect(res.status).toBe(OK);
      expect(res.body).toHaveProperty("uptime");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("timestamp");
    });
  });
});
