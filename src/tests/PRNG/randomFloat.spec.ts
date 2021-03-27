import PRNG from "../../index";
import { generateEmptyArray } from "../utilities";

const prng = new PRNG(1234567890);
const ceiling = 1;
const floor = 0;
const elementCount = 1000;
const decimalPlaces = 5;
it("should return a float within the bounds", () => {
  let values = generateEmptyArray(elementCount).map((el) =>
    prng.randomFloat(decimalPlaces)
  );

  expect(values.some((el) => el > ceiling)).toBe(false);
  expect(values.some((el) => el < floor)).toBe(false);
});

it("should generate a number if bounds are not provided", () => {
  let values = generateEmptyArray(elementCount).map((el) => prng.randomFloat());
  expect(values.some((el) => el <= Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(values.some((el) => el >= 0)).toBe(true);
});

it("should generate a number with the correct number of decimal places", () => {
  let values = generateEmptyArray(elementCount).map((el) =>
    prng.randomFloat(decimalPlaces)
  );

  expect(
    values.reduce((acc, el) => {
      const len = String(el).split(".")[1].length;
      if (len > acc) return len;
      else return acc;
    }, 0)
  ).toBe(decimalPlaces);
});
