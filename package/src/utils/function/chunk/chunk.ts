import ErrorHandler from "../../../services/error-handler.service";

/**
 * Clamps a number between a specified minimum and maximum range, with an option to allow Infinity values.
 *
 * @param {Array} array - Array
 * @param {number} chunkSize- Size.
 * finity as a result or throw an error for large numbers.
 * @returns {Array} The clamped value, ensuring it falls between the min and max.
 */

export function chunk(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}