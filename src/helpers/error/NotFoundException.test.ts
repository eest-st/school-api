import { NOT_FOUND } from "http-status";

import NotFoundException from "./NotFoundException";

describe("NotFoundException", () => {
  it("should create an instance with the correct status and default message", () => {
    const notFoundException = new NotFoundException();
    expect(notFoundException.status).toBe(NOT_FOUND);
    expect(notFoundException.message).toBe("Not Found");
  });
});
