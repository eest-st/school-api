import { compare, hash } from "./crypt";

describe("crypt utils", () => {
  it("should return a hashed value", async () => {
    const hashedValue = await hash("test");

    expect(hashedValue).not.toBe("test");
  });

  it("should return true if the value is correct", async () => {
    const hashedValue = await hash("test");
    const isCorrect = await compare("test", hashedValue);

    expect(isCorrect).toBe(true);
  });

  it("should return false if the value is incorrect", async () => {
    const hashedValue = await hash("test");
    const isCorrect = await compare("test1", hashedValue);

    expect(isCorrect).toBe(false);
  });
});
