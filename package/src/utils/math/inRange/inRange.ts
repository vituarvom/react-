export function inRange(num: number, min: number, max: number): boolean {
    if (min > max) {
        [min, max] = [max, min];  // Swap min and max
    }
    return num >= min && num <= max;
}
