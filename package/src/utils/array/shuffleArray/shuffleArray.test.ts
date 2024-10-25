import { shuffleArray } from "./shuffleArray";

describe('shuffleArray', () => {
    it('should shuffle the elements of the array randomly', () => {
        const arr = [1, 2, 3, 4, 5];
        const iterations = 5000;
        let shufflesCount = 0;

        for (let i = 0; i < iterations; i++) {
            const shuffledArr = shuffleArray(arr);
            if (!arraysEqual(shuffledArr, arr)) {
                shufflesCount++;
            }
        }
        expect(shufflesCount / iterations).toBeGreaterThanOrEqual(0.98);

        expect(shuffleArray([])).toEqual([]);
        expect(shuffleArray([1])).toEqual([1]);
    });
    it('should work with arrays of different data types', () => {
        const stringArr = ['a', 'b', 'c', 'd', 'e'];
        const shuffledStringArr = shuffleArray(stringArr);

        expect(shuffledStringArr).not.toEqual(stringArr);
        expect(shuffledStringArr.length).toBe(stringArr.length);
        expect(shuffledStringArr.sort()).toEqual(stringArr.sort());

        const objectArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const shuffledObjectArr = shuffleArray(objectArr);

        expect(shuffledObjectArr).not.toEqual(objectArr);
        expect(shuffledObjectArr.length).toBe(objectArr.length);
        expect(shuffledObjectArr.map(obj => obj.id).sort()).toEqual(objectArr.map(obj => obj.id).sort());
    })

    it('should return an empty array if input is an empty array', () => {
        const arr: any[] = [];
        const shuffledArr = shuffleArray(arr);

        expect(shuffledArr).toEqual([]);
    });

    it('should not mutate the original array', () => {
        const arr = [1, 2, 3, 4, 5];
        const arrCopy = [...arr];
        shuffleArray(arr);

        expect(arr).toEqual(arrCopy);
    });
    function arraysEqual(a: number[], b: number[]): boolean {
        return a.length === b.length && a.every((value, index) => value === b[index]);
    }

});