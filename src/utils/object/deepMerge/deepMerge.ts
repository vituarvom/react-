export function deepMerge<T>(obj1: T, obj2: T): T {
    if (typeof obj1 !== 'object' || obj1 === null) {
        return obj2;
    }
    if (typeof obj2 !== 'object' || obj2 === null) {
        return obj2;
    }
    const result = Array.isArray(obj1) ? [...(obj1 as any)] : { ...(obj1 as any) };
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            const val1 = (obj1 as any)[key];
            const val2 = (obj2 as any)[key];
            if (typeof val2 === 'object' && val2 !== null && !Array.isArray(val2)) {
                (result as any)[key] = deepMerge(val1, val2);
            } else {
                (result as any)[key] = val2;
            }
        }
    }
    return result as T;
}
