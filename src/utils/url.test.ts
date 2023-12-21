import { getFullUrl } from "./url";

describe("url", () => {
  it("should return full url", () => {
    const req = {
      protocol: "http",
      get: jest.fn().mockReturnValue("localhost:3000"),
      baseUrl: "/api",
      path: "/users",
    } as any;

    expect(getFullUrl(req)).toBe("http://localhost:3000/api/users");
  });
});
