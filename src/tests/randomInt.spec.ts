import PRNG from "../index";

const Random = new PRNG(123456789);
const ceiling = 1000;
const floor = 100;
const elementCount = 100000;
it("should return an integer within the bounds", () => {
  let values = new Array(elementCount)
    .fill(0)
    .map((el) => Random.randomInt(floor, ceiling));
  expect(values.some((el) => el > ceiling)).toBe(false);
  expect(values.some((el) => el < floor)).toBe(false);
});

// it("should ");
