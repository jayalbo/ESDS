class Node {
  constructor(val) {
    this.val = val ?? null;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = new Node();
    this.head = this.stack;
    this.idx = 0;
  }
  push(val) {
    if (Array.isArray(val)) for (let v of val) this.push(v);
    else {
      let temp = new Node(val);
      temp.next = this.head.next;
      this.head.next = temp;
      this.idx++;
    }
  }
  pop() {
    let temp = this.head.next?.val ?? null;
    this.head = this.head.next;
    this.idx--;
    return temp;
  }
  get peek() {
    return this.head.next?.val ?? null;
  }
  get size() {
    return this.idx;
  }
  get isEmpty() {
    return this.idx === 0;
  }
  toArray() {
    let curr = this.head.next;
    const arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}
export { Stack };
