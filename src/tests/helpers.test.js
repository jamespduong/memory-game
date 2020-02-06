import { generateCards } from "../utils/helpers";

describe("generateCards function", () => {
  test("array to have elements containing id", () => {
    expect(generateCards([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
