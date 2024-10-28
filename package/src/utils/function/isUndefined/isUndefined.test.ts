import { isUndefined } from './isUndefined';

describe('isUndefined', () => {
    test('should return true for undefined', () => {
        expect(isUndefined(undefined)).toBe(true);
    });

    test('should return false for null', () => {
        expect(isUndefined(null)).toBe(false);
    });

    test('should return false for 0', () => {
        expect(isUndefined(0)).toBe(false);
    });

    test('should return false for empty string', () => {
        expect(isUndefined('')).toBe(false);
    });

    test('should return false for false', () => {
        expect(isUndefined(false)).toBe(false);
    });

    test('should return false for defined values', () => {
        expect(isUndefined(123)).toBe(false);
        expect(isUndefined([])).toBe(false);
        expect(isUndefined({})).toBe(false);
    });
});
