import { duplicateNShuffleArray, applyPairId } from "../utils/helpers";

describe("duplicateNShuffleArray function", () => {
  // test("valid array", () => {
  //   expect(duplicateNShuffleArray([1, 2, 3])).toEqual(
  //     expect.arrayContaining([1, 2, 1, 2, 3, 3])
  //   );
  // });
  test("applyPairId", () => {
    expect(applyPairId([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
