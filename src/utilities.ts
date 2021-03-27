import { SHA3 } from "sha3";
import { INVALID_PARAMETER_TYPE, VALUE_OUT_OF_BOUNDS } from "./errors";

/**
 * Helper methods for the PRNG class
 */
export default class Utilities {
  /**
   * Converts arbitrary text data into a seed value suitable for use with the PRNG
   * @param text the text to convert to a seed value
   * @returns {Number} the seed value
   */
  public static textToSeed(text: string): number {
    const hash = new SHA3(256);
    hash.update(text);
    return parseInt(hash.digest("hex"), 16);
  }

  /**
   * Converts a floating point number to an integer by moving the decimal place to the right.
   * @param number the number to convert
   * @returns {Number} an integer
   */
  public static toInteger(number: number): number {
    const value = String(number).split(".");
    if (value.length > 1) {
      return parseInt(`${value[0]}${value[1]}`);
    }
    return number;
  }
  /**
   * Checks value type and throws an error if invalid
   * @param value the value to check
   * @param type the expected value type
   * @param valueName the name of the value
   * @throws {INVALID_value_TYPE}
   */
  public static checkValueType(value: any, type: string, valueName: string) {
    if (typeof value !== type)
      throw INVALID_PARAMETER_TYPE(valueName, "number");
  }
  /**
   * Checks if a value is within a given range
   * @param value the value to check
   * @param upperBound the upper bound
   * @param lowerBound the lower bound
   * @param valueName the name of the parameter
   * @throws {VALUE_OUT_OF_BOUNDS} if parameter is out of bounds
   */
  public static checkValueBounds(
    value: number,
    upperBound: number,
    lowerBound: number,
    valueName: string
  ) {
    if (value > upperBound || value < lowerBound) {
      throw VALUE_OUT_OF_BOUNDS(valueName, upperBound, lowerBound);
    }
  }
}
