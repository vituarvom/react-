import { isStringEqualIgnoreCase } from './isStringEqualIgnoreCase';

describe('isStringEqualIgnoreCase', () => {
    it('should return true for equal strings with different cases', () => {
        expect(isStringEqualIgnoreCase("Hello", "hello")).toBe(true);
    });

    it('should return true for equal strings with same case', () => {
        expect(isStringEqualIgnoreCase("Hello", "Hello")).toBe(true);
    });

    it('should return false for different strings', () => {
        expect(isStringEqualIgnoreCase("Hello", "hi")).toBe(false);
    });

    it('should return true for strings that are empty', () => {
        expect(isStringEqualIgnoreCase("", "")).toBe(true);
    });

    it('should return false for one empty string and one non-empty string', () => {
        expect(isStringEqualIgnoreCase("", "Hello")).toBe(false);
    });
});