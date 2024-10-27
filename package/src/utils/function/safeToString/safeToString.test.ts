import { safeToString } from './safeToString'; 
describe('safeToString', () => {
  it('should convert a string to string', () => {
      expect(safeToString('Hello, world!')).toBe('Hello, world!');
  });
  it('should convert a number to string', () => {
      expect(safeToString(42)).toBe('42');
  });
  it('should convert boolean true to string', () => {
      expect(safeToString(true)).toBe('true');
  });
  it('should convert boolean false to string', () => {
      expect(safeToString(false)).toBe('false');
  });
  it('should return "null" for null input', () => {
      expect(safeToString(null)).toBe('null');
  });
  it('should return "undefined" for undefined input', () => {
      expect(safeToString(undefined)).toBe('undefined');
  });
  it('should convert number 0 to string "0"', () => {
      expect(safeToString(0)).toBe('0');
  });
  it('should return empty string for empty string input', () => {
      expect(safeToString('')).toBe('');
  });
});