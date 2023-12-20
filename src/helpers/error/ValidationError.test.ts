import ValidationError from "./ValidationError";

describe("ValidationError", () => {
  it("should create a ValidationError instance with correct properties", () => {
    const validationErrors = {
      field1: "Invalid value",
      field2: "Another error",
    };

    const error = new ValidationError(validationErrors);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.status).toBe(400);
    expect(error.message).toBe("Bad Request");
    expect(error.details).toEqual(validationErrors);
  });
});
