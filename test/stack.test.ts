class Stack {
  top = -1;
  items = {};

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top >= 0) {
      delete this.items[this.top];
      this.top -= 1;
    }
  }
}

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  it("is created if empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("it should push", () => {
    stack.push("😁");
    expect(stack.peek).toBe("😁");
    expect(stack.top).toBe(0);
  });

  it("it should pop", () => {
    stack.pop();
    expect(stack.peek).toBe(undefined);
    expect(stack.top).toBe(-1);
  });
});
