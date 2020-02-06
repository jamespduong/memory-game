import { generateCards } from "../utils/helpers";

describe("generateCards function", () => {
  test("input of array of 8 elements to return output array of 15 elements", () => {
    expect(generateCards([1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(15);
  });
});
