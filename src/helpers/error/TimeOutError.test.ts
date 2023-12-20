import { REQUEST_TIMEOUT } from "http-status";

import TimeOutError from "./TimeOutError";
import CONFIG from "~/config";

describe("TimeOutError", () => {
  it("should create an instance with the correct status, default message, timeout, and path", () => {
    const customPath = "/api/resource";
    const timeoutError = new TimeOutError(customPath);

    expect(timeoutError.status).toBe(REQUEST_TIMEOUT);
    expect(timeoutError.message).toBe("Request Time-out");
    expect(timeoutError.timeout).toBe(CONFIG.SERVER.TIMEOUT);
    expect(timeoutError.path).toBe(customPath);
  });
});
