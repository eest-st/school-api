import { differenceWith, isEqual } from "lodash-es";

import { diff } from "./array";

jest.mock("lodash-es", () => ({
  differenceWith: jest.fn(),
  isEqual: jest.fn(),
}));

describe("diff", () => {
  it("should call to differenceWith and isEqual from lodash", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];

    diff(arr1, arr2);

    expect(differenceWith).toHaveBeenCalledWith(arr2, arr1, isEqual);
    expect(differenceWith).toHaveBeenCalledWith(arr1, arr2, isEqual);
  });

  it("should return added and removed keys", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];

    (differenceWith as jest.Mock).mockReturnValueOnce([4]);
    (differenceWith as jest.Mock).mockReturnValueOnce([1]);

    expect(diff(arr1, arr2)).toEqual({ added: [4], removed: [1] });
  });
});
