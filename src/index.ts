import { MODULUS, MULTIPLIER, INCREMENT } from "./constants";
import Utilities from "./utilities";

/**
 * A seedable pseudo random number generator
 */
export default class PRNG {
  private _seed: number;
  private _modulus: number;
  private _multiplier: number;
  private _increment: number;

  /**
   * Constructs a new instance of PRNG
   * @param seed the seed value. Any none number values will be converted to a number using Utilities.textToSeed and JSON.stringify
   * @param modulus
   * @param multiplier
   * @param increment
   */
  constructor(
    seed: any,
    modulus: number = MODULUS,
    multiplier: number = MULTIPLIER,
    increment: number = INCREMENT
  ) {
    // Check parameters
    Utilities.checkValueType(multiplier, "number", "multiplier");
    Utilities.checkValueType(modulus, "number", "modulus");
    Utilities.checkValueType(increment, "number", "increment");
    this._seed =
      typeof seed === "number"
        ? seed
        : Utilities.textToSeed(JSON.stringify(seed));
    this._modulus = modulus;
    this._multiplier = multiplier;
    this._increment = increment;
  }
  /**
   * Returns the current generator state
   * @returns the current state of the generator
   */
  public saveState(): number {
    return this._seed;
  }
  /**
   * Restores a saved state for continued use
   * @param state the state to be restored
   */
  public restoreState(state: number) {
    this._seed =
      typeof state === "number"
        ? state
        : Utilities.textToSeed(JSON.stringify(state));
  }
  /**
   * Reseeds the number generator
   * @param seed the new seed value to use
   */
  public reset(seed: number) {
    this._seed = seed;
  }
  /**
   * Generates a random integer
   * @param floor the lower bound of the number, inclusive
   * @param ceiling the upper bound of the number, inclusive
   * @returns a random integer between floor and ceiling
   */
  public randomInt(
    floor: number = 0,
    ceiling: number = Number.MAX_SAFE_INTEGER
  ): number {
    Utilities.checkValueType(floor, "number", "floor");
    Utilities.checkValueType(ceiling, "number", "ceiling");
    return Math.floor(this._generate() * (ceiling - floor + 1) + floor);
  }
  /**
   * Generates a random floating point value
   * @param floor the lower bound of the number, inclusive
   * @param ceiling the upper bound of the number, exclusive
   * @param decimalPlaces the number of decimal places to return. Defaults to 2
   * @returns a random float between floor and ceiling
   */
  public randomFloat(
    floor: number = 0,
    ceiling: number = Number.MAX_SAFE_INTEGER,
    decimalPlaces: number = 2
  ): number {
    Utilities.checkValueType(floor, "number", "floor");
    Utilities.checkValueType(ceiling, "number", "ceiling");
    Utilities.checkValueBounds(decimalPlaces, 20, 1, "decimalPlaces");
    return Number(
      (this._generate() * (ceiling - floor + 1) + floor).toFixed(decimalPlaces)
    );
  }

  private _generate(): number {
    this._seed =
      (this._multiplier * this._seed + this._increment) % this._modulus;
    return Number(`0.${this._seed}`);
  }
}
