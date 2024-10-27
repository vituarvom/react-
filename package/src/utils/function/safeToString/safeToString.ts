/**
 * Converts a given value to a string safely.
 * 
 * This function handles different types of inputs, including:
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 * 
 * If the value is undefined, it returns the string 'undefined'.
 * If the value is null, it returns the string 'null'.
 * For all other types, it converts the value to a string using the String() constructor.
 * 
 * @param value - The value to be converted to a string.
 * @returns A string representation of the input value.
 * 
 * @example
 * safeToString('hello')     // Returns: 'hello'
 * safeToString(42)          // Returns: '42'
 * safeToString(true)        // Returns: 'true'
 * safeToString(null)        // Returns: 'null'
 * safeToString(undefined)   // Returns: 'undefined'
 */
export function safeToString(value: string | number | boolean | null | undefined): string {
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    return String(value);
}