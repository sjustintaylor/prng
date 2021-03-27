import { MODULUS, MULTIPLIER, INCREMENT } from "./constants";

export default class PRNG {
  private _seed: number;
  private _modulus: number;
  private _multiplier: number;
  private _increment: number;
  constructor(
    seed: number,
    modulus: number = MODULUS,
    multiplier: number = MULTIPLIER,
    increment: number = INCREMENT
  ) {
    this._seed = seed;
    this._modulus = modulus;
    this._multiplier = multiplier;
    this._increment = increment;
  }
  /**
   * Returns the current generator state
   * @returns the current state of the generator
   */
  public saveState(): number {
    return 0;
  }
  /**
   * Restores a saved state for continued use
   * @param state the state to be restored
   */
  public restoreState(state: number) {
    this._seed = state;
  }
  /**
   * Reseeds the number generator
   * @param seed the new seed value to use
   */
  public reseed(seed: number) {
    this._seed = seed;
  }
  /**
   * Generates a random integer
   * @param floor the lower bound of the number, inclusive
   * @param ceiling the upper bound of the number, exclusive
   * @returns a random integer between floor and ceiling
   */
  public randomInt(
    floor: number = 0,
    ceiling: number = Number.MAX_SAFE_INTEGER
  ): number {
    return Math.floor(this._generate() * (ceiling - floor + 1) + floor);
  }
  /**
   * Generates a random floating point value
   * @param floor the lower bound of the number, inclusive
   * @param ceiling the upper bound of the number, exclusive
   * @returns a random float between floor and ceiling
   */
  public randomFloat(floor: number, ceiling: number): number {
    return 0;
  }

  private _generate(): number {
    this._seed =
      (this._multiplier * this._seed + this._increment) % this._modulus;
    return Number(`0.${this._seed}`);
  }
}
