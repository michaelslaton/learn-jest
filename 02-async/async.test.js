const fecthData = require("./async");

it("should return correct todo", ()=> {
  fecthData(1).then((todo)=> {
    expect(todo.id).toBe(1);  
  });
});

it("should return correct todo", async ()=> {
  const todo = await fecthData(1);
  expect(todo.id).toBe(1);  
});