import HttpStatus, { OK } from "http-status";
import { apiResponse } from "./apiResponse";

describe("apiResponse", () => {
  it("should return an ApiSuccessResponse with default values", () => {
    const result = apiResponse();

    expect(result).toEqual({
      status: OK,
      message: HttpStatus[OK] as string,
      data: undefined,
    });
  });

  it("should return an ApiSuccessResponse with provided data", () => {
    const testData = { key: "value" };
    const result = apiResponse(testData);

    expect(result).toEqual({
      status: OK,
      message: HttpStatus[OK] as string,
      data: testData,
    });
  });

  it("should use the correct HTTP status code and message", () => {
    const result = apiResponse();

    expect(result.status).toEqual(OK);
    expect(result.message).toEqual(HttpStatus[OK]);
  });
});
