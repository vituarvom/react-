import { isNumber } from './isNUmber';

describe('isNumber', () => {
    test('should return true for integers', () => {
        expect(isNumber(123)).toBe(true);
    });

    test('should return true for floats', () => {
        expect(isNumber(3.14)).toBe(true);
    });

    test('should return false for strings', () => {
        expect(isNumber('Hello')).toBe(false);
    });

    test('should return false for NaN', () => {
        expect(isNumber(NaN)).toBe(false);
    });

    test('should return false for null', () => {
        expect(isNumber(null)).toBe(false);
    });

    test('should return false for undefined', () => {
        expect(isNumber(undefined)).toBe(false);
    });
});
