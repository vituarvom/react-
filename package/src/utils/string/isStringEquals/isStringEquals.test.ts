import { isStringEqual } from './isStringEquals';

test('should return true for identical strings', () => {
    expect(isStringEqual('Hello', 'Hello')).toBe(true);
});

test('should return false for different strings', () => {
    expect(isStringEqual('Hello', 'World')).toBe(false);
});

test('should return false for case-sensitive mismatch', () => {
    expect(isStringEqual('Hello', 'hello')).toBe(false);
});