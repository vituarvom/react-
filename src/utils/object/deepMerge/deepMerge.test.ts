import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
    it('should merge two simple objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should merge nested objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { b: { d: 3 } };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: 1, b: { c: 2, d: 3 } });
    });

    it('should overwrite primitive values', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: 2 });
    });

    it('should overwrite arrays', () => {
        const obj1 = { a: [1, 2, 3] };
        const obj2 = { a: [4, 5] };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: [4, 5] });
    });

    it('should handle null and undefined values', () => {
        const obj1 = { a: 1, b: null, c: undefined };
        const obj2 = { b: 2, c: 3 };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it('should handle when obj1 is null', () => {
        const obj1 = null;
        const obj2 = { a: 1 };
        const result = deepMerge<Record<string, any>|null>(obj1, obj2);
        expect(result).toEqual({ a: 1 });
    });

    it('should handle when obj2 is null', () => {
        const obj1 = { a: 1 };
        const obj2 = null;
        const result = deepMerge<Record<string, any>|null>(obj1, obj2);
        expect(result).toEqual(null);
    });

    it('should handle when both obj1 and obj2 are null', () => {
        const obj1 = null;
        const obj2 = null;
        const result = deepMerge<null>(obj1, obj2);
        expect(result).toEqual(null);
    });

    it('should handle arrays at root level', () => {
        const obj1 = [1, 2, 3];
        const obj2 = [4, 5];
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual([4, 5, 3]);
    });

    it('should handle conflicting types', () => {
        const obj1 = { a: { b: 1 } };
        const obj2 = { a: 2 };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result).toEqual({ a: 2 });
    });

    it('should not modify the original objects', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj1Copy = { ...obj1 };
        const obj2Copy = { ...obj2 };
        deepMerge<Record<string, any>>(obj1, obj2);
        expect(obj1).toEqual(obj1Copy);
        expect(obj2).toEqual(obj2Copy);
    });

    it('should handle functions in objects', () => {
        const func = () => {};
        const obj1 = { a: func };
        const obj2 = { b: 2 };
        const result = deepMerge<Record<string, any>>(obj1, obj2);
        expect(result.a).toBe(func);
        expect(result.b).toBe(2);
    });

    it('should handle when obj2 is a primitive value', () => {
        const obj1 = { a: 1 };
        const obj2 = 2;
        const result = deepMerge<Record<string, any>|number>(obj1, obj2);
        expect(result).toBe(2);
    });
});
