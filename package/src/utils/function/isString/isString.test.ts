import { isString } from "./isString"; 

describe('isString', () => {

  
    it('should return true for a string', () => {
        expect(isString('Hello World')).toBe(true); 
    });


    it('should return false for a number', () => {
        expect(isString(123)).toBe(false);
    });


    it('should return false for an array', () => {
        expect(isString([])).toBe(false); 
    });

    
    it('should return false for an object', () => {
        expect(isString({})).toBe(false);
    });


    it('should return false for null', () => {
        expect(isString(null)).toBe(false); 
    });

    it('should return false for undefined', () => {
        expect(isString(undefined)).toBe(false); 
    });
});
