import { UNAUTHORIZED } from "http-status";

import UnauthorizedError from "./UnauthorizedError";

describe("UnauthorizedError", () => {
  it("should create an instance with the correct status and custom message if provided", () => {
    const customMessage = "Custom Unauthorized Message";
    const unauthorizedError = new UnauthorizedError(customMessage);
    expect(unauthorizedError.status).toBe(UNAUTHORIZED);
    expect(unauthorizedError.message).toBe(customMessage);
  });
});
