import Utilities from "../../utilities";

it("should return an integer", () => {
  const value = Utilities.toInteger(123.456);
  expect(value).toEqual(123456);
});

it("should return the same integer passed to it", () => {
  const value = Utilities.toInteger(123456);
  expect(value).toEqual(123456);
});
