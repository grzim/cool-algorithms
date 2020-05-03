/*
  function f and array args are passed as arguments
   returns array of unique values. Uniqueness is defined relatively to provided function
 */

const uniqBy = (f, args) =>
     args
        .map(arg => ({ original: arg, toCheck: f(arg) }))
        .reduce(
            (acc, curr) =>
                acc.map(arg => arg.toCheck).includes(curr.toCheck)
                    ? acc
                    : [...acc, curr],
            []
        )
        .map(arg => arg.original);


/// Jasmine tests:
describe(`${uniqBy.name}`, () => {
  const expectedFloor = [1.2, 2, 3.1];
  const numbers = [1.2, 1.2, 1.3, 2, 2.1, 3.1];
  const chars = ["2", "1", "0", "1", "2", "2"];
  const booleans = chars.map(Number).map(Boolean);
  const expectedNumbersFromBooleans = [true, false];
  describe("for function and array of values passed as arguments returns array of unique values. Uniqueness is defined relatively to provided function", () => {
    it(`Given x => x and [${chars}] the returned array will have no duplications`, () => {
      const uniqChars = uniqBy(x => x, chars);
      const hasNoRepetition = new Set(uniqChars).size === uniqChars.length;
      expect(hasNoRepetition).toBeTruthy();
    });
    it(`Given Math.floor and [${numbers}] returns [${expectedFloor}]`, () => {
      expect(uniqBy(Math.floor, numbers)).toEqual(expectedFloor);
    });
    it(`Given Number and [${booleans}] returns [${expectedNumbersFromBooleans}]`, () => {
      expect(uniqBy(Number, booleans)).toEqual(expectedNumbersFromBooleans);
    });
  });
});
