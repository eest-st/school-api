import { sanitizer } from "./dataSanitizers";

describe("dataSanitizer", () => {
  it("should return an array of validator functions", () => {
    const validator = sanitizer([]);
    expect(validator).toBeInstanceOf(Array);
    expect(validator).toHaveLength(1);
    expect(validator[0]).toBeInstanceOf(Function);
  });

  it("should return an array of validator functions with a catchValidatorError function", () => {
    const validator = sanitizer([]);
    expect(validator).toBeInstanceOf(Array);
    expect(validator).toHaveLength(1);
    expect(validator[0]).toBeInstanceOf(Function);
    expect(validator[0].name).toBe("catchValidatorError");
  });
});
