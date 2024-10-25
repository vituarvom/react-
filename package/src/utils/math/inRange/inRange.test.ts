import { inRange } from './inRange';

describe('inRange', () => {
    test('should return true when the number is within the range', () => {
        expect(inRange(5, 1, 10)).toBe(true);
    });

    test('should return false when the number is below the range', () => {
        expect(inRange(0, 1, 10)).toBe(false);
    });

    test('should return true when the number is equal to the minimum value', () => {
        expect(inRange(1, 1, 10)).toBe(true);
    });

    test('should return true when the number is equal to the maximum value', () => {
        expect(inRange(10, 1, 10)).toBe(true);
    });

    test('should return false when the number is above the range', () => {
        expect(inRange(11, 1, 10)).toBe(false);
    });

    test('should return false when the range is invalid (min > max)', () => {
        expect(inRange(5, 10, 1)).toBe(false);
    });
});
