/**
 * The `sample` function selects a random element from an input array.
 * @param {T[]} arr - An array of elements of type `T`, from which to select a random element.
 * @returns A randomly selected element of type `T` from the input array.
 * @throws {TypeError} Will throw an error if the input is not an array.
 * @throws {Error} Will throw an error if the input array is empty.
 */
export declare function sample<T>(arr: T[]): T;
