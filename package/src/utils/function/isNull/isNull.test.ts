import { isNull } from "./isNull";

describe('isNull', () => {
    test('should return true for null', () => {
        expect(isNull(null)).toBe(true);
    });

    test('should return false for undefined', () => {
        expect(isNull(undefined)).toBe(false);
    });

    test('should return false for 0', () => {
        expect(isNull(0)).toBe(false);
    });

    test('should return false for empty string', () => {
        expect(isNull('')).toBe(false);
    });

    test('should return false for false', () => {
        expect(isNull(false)).toBe(false);
    });

    test('should return false for non-null values', () => {
        expect(isNull(123)).toBe(false);
        expect(isNull([])).toBe(false);
        expect(isNull({})).toBe(false);
    });
});
