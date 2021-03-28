import { PRNG } from "../../index";

const seed = 1234567890;
const prng = new PRNG(seed);
const elementCount = 1000;

it("should allow you to reset state", () => {
  for (let i = 0; i < elementCount; i++) {
    prng.randomInt();
  }
  const state = prng.saveState();
  const next = prng.randomInt();
  prng.reset(state);
  expect(prng.randomInt()).toEqual(next);
});
