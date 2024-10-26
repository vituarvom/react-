/**
 * The `isNull` function in TypeScript checks if a value is null using strict equality and `Object.is`
 * comparison.
 * @param {unknown} value - The `value` parameter in the `isNull` function is of type `unknown`, which
 * means it can be any type. The function checks if the value is strictly equal to `null` or if it is
 * `null` using `Object.is` method.
 * @returns The function `isNull` returns a boolean value indicating whether the input `value` is
 * `null` or not.
 */

declare function isNull(value: unknown): boolean;
