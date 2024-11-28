import { capitalize } from "./capitalize";

describe('capitalize function', () => {
    it("should capitalize the first latter of lowercase string", () => {
        const result = capitalize("marcos");
        expect(result).toBe("Marcos");
    });

    it("should return the same string if the first latter already in capitalize", () => {
        const result = capitalize("Marcos");
        expect(result).toBe("Marcos");
    });
    it("should handle an empty string", () => {
        const result = capitalize("");
        expect(result).toBe("");
    });

    it("should capitalize the first latter and ignore the case of subsequent letters", () => {
        const result = capitalize('hellO WoRld');
        expect(result).toBe('Hello world');
    });
    it("should remove special characters and numbers",()=>{
        const result=capitalize('Maaarrcoo₹@%@^^@_×<×<^@&<×<1237sss!&.');
        expect(result).toBe('Maaarrcoosss');
    })
    it("should throw an error for null or undefined inputs", () => {
        expect(() => capitalize(null as unknown as string)).toThrow("Input should be a string");
        expect(() => capitalize(undefined as unknown as string)).toThrow("Input should be a string");
    });
    it("should return an empty string if no alphabetic characters are present",()=>{
        const result=capitalize("12345!@#$%^&*().*");
        expect(result).toBe("");
    });
});