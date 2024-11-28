export function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}
