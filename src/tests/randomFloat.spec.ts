import PRNG from "../index";
import { generateEmptyArray } from "./utilities";

const prng = new PRNG(123456789);
const ceiling = 1000;
const floor = 100;
const elementCount = 10;
it("should return a float within the bounds", () => {
  let values = generateEmptyArray(elementCount).map((el) =>
    prng.randomFloat(floor, ceiling)
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
  let values = generateEmptyArray(elementCount).map((el) => prng.randomInt());
  expect(values.some((el) => el <= Number.MAX_SAFE_INTEGER)).toBe(true);
});
