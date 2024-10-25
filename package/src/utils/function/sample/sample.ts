/**
 * The `sample` function in TypeScript selects a random element from an input array.
 * @param {T[]} arr - The `arr` parameter in the `sample` function is an array of type `T`, where `T`
 * represents the type of elements in the array. The function selects a random element from the input
 * array and returns it.
 * @returns The `sample` function returns a random element from the input array `arr`.
 */
export const sample = <T>(arr: T[]): T => {
  if (!Array.isArray(arr)) {
    throw new Error("TypeError: Expected an array as input");
  }

  if (arr.length === 0) {
    throw new Error("Array cannot be empty.");
  }

  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};
