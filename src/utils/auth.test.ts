import { hidePassword } from "./auth";

describe("auth", () => {
  it("should return the bodyData with formatted password", () => {
    const bodyData = {
      username: "test",
      password: "test",
    };

    expect(hidePassword(bodyData)).toEqual({
      username: "test",
      password: "********",
    });
  });
});
