import Utilities from "../../utilities";

it("should return a number", () => {
  const value = Utilities.textToSeed("Hello world");
  expect(typeof value).toBe("number");
});

it("should return the same number each time", () => {
  const value1 = Utilities.textToSeed("Hello world");
  const value2 = Utilities.textToSeed("Hello world");
  expect(value1).toEqual(value2);
});
