import { duplicateNShuffleArray } from "../utils/helpers";

describe("duplicateNShuffleArray function", () => {
  test("valid array", () => {
    expect(duplicateNShuffleArray([1, 2, 3])).toEqual(
      expect.arrayContaining([1, 2, 1, 2, 3, 3])
    );
  });
});
