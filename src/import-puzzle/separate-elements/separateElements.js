const separateElementsFromRawPuzzleArray = (type, rawArray) => {
  const elementArray = rawArray.filter(
    element => (elementType.LETTERS === type && element.length === 1) || (elementType.WORDS === type && element.length > 1)
  );

  if (elementArray.length === 0) {
    throw new Error(`Puzzle is invalid. It contains no ${type}.`);
  } else if (elementType.LETTERS === type && Math.sqrt(elementArray.length) % 1 !== 0) {
    throw new Error(`Puzzle is invalid. It is not square.`);
  } else {
    return elementArray.map(element => element.trim());
  }
};

const elementType = Object.freeze({
  WORDS: "words",
  LETTERS: "letters",
});

module.exports = { separateElementsFromRawPuzzleArray, elementType };
