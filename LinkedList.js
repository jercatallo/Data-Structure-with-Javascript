// Singly Linked List

// head
// 0 -> 0 -> 0 -> 0 -> 0
//                     tail

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    //IF there is no head in the linked list
    if (!this.head) {
      return undefined;
    }
    let current = this.head; // For reference what is popup
    let newTail = current;

    //When there is no next that means that is the last node
    //When popping checking if it is the second to the last of the node so that it will become the new tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    //Setting the new tail next equal null means that this is the new Last Node
    this.tail.next = null;

    this.length--;
    //IF after the popping the length is 0 it means that there is no head or tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return false;
    }

    let temp = this.head; // For reference
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  print() {
    let current = this.head;
    let count = 0;
    let arr = [];

    while (count < this.length) {
      arr.push(current);
      current = current.next;
      count++;
    }

    console.log(arr);
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.value = val;

    return this;
  }
}

let list = new SinglyLinkList();
list.push(1);
list.push(2);
list.push(3);
list.push(2);
list.push(3);
list.push(2);
list.push(3);
list.push(4);
// list.unshift("new head");
// list.unshift("new head 2");
// list.unshift("new head 3");
// list.shift();
// list.shift();
// list.shift();
// list.shift();
list.print();
list.set(3, "SETTED VALUE");
list.print();

console.log(list.get(1));
