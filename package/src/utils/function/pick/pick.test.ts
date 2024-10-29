import { pick } from "./pick";

describe('pick function', () => {
    it("should pick properties from an object", () => {
        const obj = {a:1, b:2, c:3};
        const result = pick(obj, ['a','c']);
        expect(result).toEqual({a:1, c:3});
    });

    it("should return an empty object when no keys are matched",() =>{
        const obj = {a:1,b:2,c:3};
        const result = pick(obj, ['d']);
        expect(result).toEqual({});
    });

    it("it should ignore the key that do no exist",()=>{
        const obj = {a:1,b:2,c:3};
        const result = pick(obj,['a','d']);
        expect(result).toEqual({a:1});
    });

    it("should pick properties from an nested object with dot notation",() =>{
        const obj = {
            user:{
                name:'Ram',
                age: 20,
                address:{
                    state:'Maharastra',
                    city:'Mumbai',
                    pincode:'421302'
                }
            }
        }
        const result = pick(obj, ['user.name','user.address.state']);
        expect(result).toEqual({
            user:{
                name:'Ram',
                address:{
                    state:'Maharastra'
                }
            }
        });
    });

    it("should pick properties from an deep nested object",() =>{
        const obj ={
            user:{
                details:{
                    name:'Ram',
                    age: 20,
                    address:{
                        state:'Maharastra',
                        city:'Mumbai',
                        pincode:'421302'
                    }
                }
            }
        }

        const result = pick(obj, ['user.details.address.state']);
        expect(result).toEqual({
            user:{
                details:{
                address:{
                    state:'Maharastra'
                }
            }
        }
    });
});

it("should return an object only with valid key, or empty if doesn't exist", () => {
    const obj = {
      user: {
        name: 'Ram', 
        age: 20,
        address: {
          state: 'Maharashtra',
          city: 'Mumbai',
          pincode: '421302'
        }
      }
    };
  
    const result = pick(obj, ['user.gender', 'user.age']);
    expect(result).toEqual({ user: { age: 20 } });
  });

  it("should return an empty object if keys array is empty",() => {
    const obj = {a:1,b:2,c:3};
    const result = pick(obj, []);
    expect(result).toEqual({});
  });

  it("should handle empty keys array", () => {
    const obj = {a:1,b:2,c:3};
    const result = pick(obj,[]);
    expect(result).toEqual({});
    });

    it("should handle null/undefined source", () => {
    const obj = {a:1,b:2,c:3};
    const result1 = pick(obj,['null','a']);
    expect(result1).toEqual({});
    const result2 = pick(obj,['undefined','a']);
    expect(result2).toEqual({});
    });

    it("should handle null/undefined input gracefully", () => {
    const obj = {a:1,b:2,c:3};
    const result1 = pick(obj,['null','a']);
    expect(result1).toEqual({});
    const result2 = pick(obj,['undefined','a']);
    expect(result2).toEqual({});
    });

    it("should handle array properties", () => {
    const obj = { items: [1, 2, 3], meta: { total: 3 } };
    const result = pick(obj,['items', 'meta.total']);
    expect(result).toEqual({ items: [1, 2, 3], meta: { total: 3 } });
    });

    it("should handle null/undefined nested values", () => {
    const obj = { user: { name: null, details: undefined } };
    const result = pick(obj, ['user.name', 'user.details']);
    expect(result).toEqual({ user: { name: null, details: undefined } });
    });
  
});