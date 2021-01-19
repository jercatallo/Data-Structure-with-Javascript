class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek = () => {
    if (this.top) {
      return this.top;
    } else {
      return null;
    }
  };

  pop = () => {
    if (!this.top) {
      return -1;
    }

    let top = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return top;
  };

  push = (data) => {
    const node = new Node(data);

    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
    }
    this.length++;

    return this;
  };
}

const s = new Stack();

s.push("3 stack");
s.push("4stack");
s.push("5 stack");
console.log(s.peek());
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
// console.log(s);
