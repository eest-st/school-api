import { FORBIDDEN } from "http-status";

import ForbiddenError from "./ForbiddenError";

describe("ForbiddenError", () => {
  it("should create an instance with the correct status and message", () => {
    const customMessage = "Custom Forbidden Message";
    const forbiddenError = new ForbiddenError(customMessage);
    expect(forbiddenError.status).toBe(FORBIDDEN);
    expect(forbiddenError.message).toBe(customMessage);
  });
});
