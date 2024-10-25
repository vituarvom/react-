/**
 * Removes duplicate elements from an array, handling both primitive and non-primitive values.
 * @template T - The type of elements in the array.
 * @param {T[]} arr - An array of elements of any type to be made unique.
 * @returns {T[]} A new array containing unique elements from the input array `arr`.
 * Duplicates are removed, and uniqueness is determined based on the value of the elements.
 */
export declare const uniqueArray: <T>(arr: T[]) => T[];
