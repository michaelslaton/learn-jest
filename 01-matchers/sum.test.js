const { sum , compileAndroidCode } = require("./sum");

// .toEqual
// .toBe

describe("example tests", ()=> {
  it ("should add 1 + 2 to = 3", ()=> {
    const result = sum(1,2);
  
    expect(result).toBe(3);
  });
  
  it ("object assignment", ()=> {
    const obj = {};
    expect(obj).toEqual({})
  });
});

describe("truthy or falsey", ()=> {
  it("null", ()=> {
    const n = null;

    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  })
});

describe("numbers", ()=> {
  it ("two plus two", ()=> {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(4);
  });
});

describe("adding floats", ()=> {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.299999999999999);
});

describe("strings", ()=>{
  it("there is no I in team", ()=>{
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", ()=>{
  const shoppingLists = [
    'diapers', "kleenex", 'trash bags', 'paper towls', 'milk'
  ];

  it("has milk", ()=>{
    expect(shoppingLists).toContain('milk');
  });
});

describe("exceptions", ()=>{
  it("compiling android goes as expected", ()=> {
    expect(()=> compileAndroidCode()).toThrow(Error);
    expect(()=> compileAndroidCode()).toThrow(
      "you are using the wrong JDK"
    );
  });
});