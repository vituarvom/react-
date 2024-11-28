import { add } from "./add";

describe('add function', () => {
  test('should add two positive numbers correctly', () => {
    expect(add(3, 5)).toBe(8);
  });

  test('should add two negative numbers correctly', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  test('should add a positive and a negative number correctly', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('should add zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test('should throw a TypeError if any argument is not a number', () => {
    expect(() => add(3, '5' as any)).toThrow(TypeError);
    expect(() => add('3' as any, 5)).toThrow(TypeError);
    expect(() => add(null as any, 5)).toThrow(TypeError);
    expect(() => add(3, undefined as any)).toThrow(TypeError);
  });

  test('should handle decimal numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
