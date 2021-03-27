import { MODULUS, MULTIPLIER, INCREMENT } from "./constants";

export default class PRNG {
  seed: Number;
  modulus: Number;
  multiplier: Number;
  increment: Number;
  constructor(
    seed: Number,
    modulus: Number = MODULUS,
    multiplier: Number = MULTIPLIER,
    increment: Number = INCREMENT
  ) {
    this.seed = seed;
    this.modulus = modulus;
    this.multiplier = multiplier;
    this.increment = increment;
  }
  /**
   * Returns the current generator state
   * @returns the current state of the generator
   */
  save(): Number {
    return 0;
  }
  /**
   * Restores a saved state for continued use
   * @param state the state to be restored
   */
  restore(state: Number) {
    this.seed = state;
  }
  /**
   * Reseeds the number generator
   * @param seed the new seed value to use
   */
  reseed(seed: Number) {
    this.seed = seed;
  }
  /**
   * Generates a random integer
   * @param floor the lower bound of the number
   * @param ceiling the upper bound of the number
   * @returns a random integer between floor and ceiling, inclusive
   */
  randomInt(floor: Number = 0, ceiling: Number = 1): Number {
    return 0;
  }
  /**
   * Generates a random floating point value
   * @param floor the lower bound of the number
   * @param ceiling the upper bound of the number
   * @returns a random float between floor and ceiling inclusive
   */
  randomFloat(floor: Number, ceiling: Number): Number {
    return 0;
  }
}
