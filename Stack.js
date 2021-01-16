class Stack {
  constructor() {
    this.items = []; // storage for stack
    this.count = 0; // count of the elements
  }

  //Add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} is pushed to index ${this.count}`);
    this.count++; // count is added by 1
    return this.count - 1;
  }

  // Return and remove top elemnt in stack
  // Return undefined if stack is empty
  pop() {
    if (this.count === 0) {
      console.log("The stack is empty cannot pop item");
      return undefined;
    }

    this.count--; // removes the top item
    let result = this.items[this.count];

    delete this.items[this.count]; // delete the top item in the stack
    console.log(`${result} removed from the index ${this.count}`);

    return result;
  }

  //Check top element in stack
  peek() {
    let top = this.items[this.count - 1];

    console.log(
      top
        ? `The top element of the stack is ${top}`
        : "The stack is no top and its empty"
    );

    return this.items[this.count - 1];
  }

  //Check if the stack is empty
  isEmpty() {
    console.log(this.count === 0 ? "Stack is Empty" : "Stack is not empty");
    return this.count === 0;
  }

  //Check size of the stack
  size() {
    console.log(`this stack has ${this.count} is the number of elements`);
    return this.count;
  }

  // Print elements in the stack
  print() {
    let elements = "";
    for (let i = 0; i < this.count; i++) {
      elements += this.items[i];

      i === this.count - 1 ? null : (elements += ",");
    }
    console.log(`${elements}`);
  }

  // To clear the stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack is cleared");
  }
}

const stack = new Stack();

stack.push(100);

stack.push(200);

stack.push(300);
stack.pop();
stack.pop();
stack.pop();

console.log(stack.isEmpty());
