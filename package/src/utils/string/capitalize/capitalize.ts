export function capitalize(str: string): string {
    if (typeof str !== 'string') {
        throw new Error("Input should be a string");
    }
    const filteredString = str.replace(/[^a-zA-Z\s]/g, '');
    if (filteredString.length === 0) {
        return '';
    }
    return filteredString.charAt(0).toUpperCase() + filteredString.slice(1).toLowerCase();
};