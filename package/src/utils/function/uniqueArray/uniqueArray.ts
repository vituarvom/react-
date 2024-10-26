/**
 * The `uniqueArray` function removes duplicate elements from an array, 
 * @param {T[]} arr - An array of elements of any type that you want to make unique.
 * @returns {T[]} The `uniqueArray` function returns an array of unique elements from the input array `arr`,
 * where uniqueness is determined based on the values of the elements. The function handles both
 * primitive values and non-primitive values (objects) separately to ensure uniqueness.
 */
export const uniqueArray = <T>(arr: T[]): T[] => {
  const primitives = new Set();
  const nonPrimitives = new Map();
  const result: T[] = [];

  for (const item of arr) {
    if (typeof item === "object" && item !== null) {
      // for non primitives
      const stringified = JSON.stringify(item);
      if (!nonPrimitives.has(stringified)) {
        nonPrimitives.set(stringified, item);
        result.push(item);
      }
    } else {
      // primitives
      if (!primitives.has(item)) {
        primitives.add(item);
        result.push(item);
      }
    }
  }

  return result;
};
