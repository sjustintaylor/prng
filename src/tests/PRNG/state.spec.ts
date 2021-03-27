import PRNG from "../../index";

const seed = 1234567890;
const prng = new PRNG(seed);
const elementCount = 1000;

it("should return the current state of the generator", () => {
  const state = prng.saveState();
  expect(state).toEqual(1234567890);
});

it("should allow you to restore state", () => {
  for (let i = 0; i < elementCount; i++) {
    prng.randomInt();
  }
  const state = prng.saveState();
  const next = prng.randomInt();
  prng.restoreState(state);
  expect(prng.randomInt()).toEqual(next);
});
