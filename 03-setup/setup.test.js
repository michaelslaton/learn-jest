let animals = [];

beforeAll(()=>{ // Runs once before all tests
  animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

// beforeEach(()=>{
//   animals = ['elephant', 'zebra', 'bear', 'tiger'];
// })

afterEach(()=>{
  animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterAll(()=>{
  // runs once after all tests
})

describe("animals array", ()=>{
  it("should add animal to end of array", ()=>{
    animals.push('aligator');
    expect(animals[animals.length-1]).toBe('aligator');
  });

  it("should add animal to beginning of array", ()=>{
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  it("should have initial length of 4", ()=>{
    expect(animals.length).toBe(4);
  });
});

describe("Testing something else", ()=>{

  beforeEach(()=>{
    console.log('This will only run before each for this describe block')
  })

  it("true should be truthy", ()=>{
    expect(true).toBeTruthy();
  })
})