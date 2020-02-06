import shortid from "shortid";

export const applyPairId = array =>
  array.map(e => ({
    ...e,
    pairid: shortid.generate()
  }));

export const applyId = array =>
  array.map(e => ({
    ...e,
    id: shortid.generate()
  }));

export const duplicateArray = array => [...array, ...array];

export const shuffleArray = array => array.sort(() => 0.5 - Math.random());

// return shuffled and paired cards minus one card
export const generateCards = array =>
  shuffleArray(applyId(duplicateArray(applyPairId(array)))).slice(0, -1);
