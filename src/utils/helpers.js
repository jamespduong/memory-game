export const duplicateArray = array => [...array, ...array];

export const shuffleArray = array => array.sort(() => 0.5 - Math.random());

export const duplicateNShuffleArray = array =>
  shuffleArray(duplicateArray(array));
