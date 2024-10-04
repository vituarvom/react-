// src/utils/function/sleep.ts

/**
 * Pauses execution for a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified delay.
 */
export const sleep = (ms: number): Promise<void> => {
    if (typeof ms !== 'number' || isNaN(ms) || ms < 0) {
        throw new Error("Invalid input: ms should be a non-negative number.");
    }

    return new Promise(resolve => setTimeout(resolve, ms));
};