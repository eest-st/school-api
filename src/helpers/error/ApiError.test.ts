import { INTERNAL_SERVER_ERROR } from "http-status";
import APIError from "./ApiError";

describe("APIError", () => {
  it("should create an instance with default status and message if no arguments are provided", () => {
    const errorMessage = "Internal Server Error";
    const apiError = new APIError(errorMessage);
    expect(apiError.status).toBe(INTERNAL_SERVER_ERROR);
    expect(apiError.message).toBe(errorMessage);
  });

  it("should create an instance with custom message and default status if only message is provided", () => {
    const customMessage = "Custom Error Message";
    const apiError = new APIError(customMessage);
    expect(apiError.status).toBe(INTERNAL_SERVER_ERROR);
    expect(apiError.message).toBe(customMessage);
  });

  it("should create an instance with custom message, error object, and default status if both message and error are provided", () => {
    const customMessage = "Custom Error Message";
    const customError = new Error("Custom Error");
    const apiError = new APIError(customMessage, customError);
    expect(apiError.status).toBe(INTERNAL_SERVER_ERROR);
    expect(apiError.message).toBe(customMessage);
    expect(apiError.error).toEqual({
      type: "Error",
      message: "Custom Error",
      stack: customError.stack,
    });
  });
});
