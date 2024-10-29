/** 
* Creates an object composed of the picked object properties.
* @param {object} obj - Source object to pick properties from
* @param {string[]} keys - The key to pick from the string
* @returns {object} - Return the new object
*/

export const pick = <T extends Record<string, unknown>>(obj: T | null | undefined, keys: string[]): Partial<T> => {

    if (obj === null || obj === undefined) {
        return {};
    }

    if (!obj || typeof obj !== "object") {
      throw new Error("The first argument must be a valid object");
    }

    if (!Array.isArray(keys)) {
    throw new Error("The second argument must be an array of strings");
    }
    
    const result: Partial<T> = {};

    for(const key of keys) { 
        const keyParts = key.split('.');  
        let value:any = obj; 
        let currentValue:any = result; 
        let keyExists = true; 

        for (let i = 0; i < keyParts.length; i++) { 
            const part = keyParts[i]; 

            if (value && part in value) { 
                value = value[part];

                if (i === keyParts.length - 1 && keyExists) {
                    // Assign value at the deepest level
                    currentValue[part] = value;
                } else {
                    // Ensure intermediate objects are initialized properly
                    currentValue[part] = currentValue[part] || {};
                    currentValue = currentValue[part];
                }
            }else{
                keyExists = false;
                currentValue = {};
                break;
            }
        }
    }

    return result;
};
