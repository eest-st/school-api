import { emptyToNull } from "./filter";

describe("filter utils", () => {
  it("should convert empty value to null", () => {
    const obj = {
      test: "",
      test2: "test2",
      test3: {
        test4: "",
        test5: "test5",
      },
      test6: [
        {
          test7: "",
          test8: "test8",
        },
      ],
    };

    expect(emptyToNull(obj)).toEqual({
      test: null,
      test2: "test2",
      test3: {
        test4: null,
        test5: "test5",
      },
      test6: [
        {
          test7: null,
          test8: "test8",
        },
      ],
    });
  });
});
