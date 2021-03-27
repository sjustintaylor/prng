/**
 *
 * @param parameterName the parameter name
 * @param type the parameter type
 * @returns {Error} an error
 */
export const INVALID_PARAMETER_TYPE = (parameterName: string, type: string) =>
  new Error(`Parameter '${parameterName.toString()}' must be of type ${type}`);

export const VALUE_OUT_OF_BOUNDS = (
  valueName: string,
  upperBound: number,
  lowerBound: number
) =>
  new Error(
    `Parameter '${valueName}' cannot be greater than ${upperBound} or lower than ${lowerBound}`
  );
