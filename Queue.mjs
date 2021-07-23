class Node {
  constructor(val) {
    this.val = val ?? null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = new Node();
    this.head = this.queue;
    this.tail = this.queue;
    this.idx = 0;
  }
  add(val) {
    if (Array.isArray(val)) for (let v of val) this.add(v);
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.idx++;
    }
  }
  poll() {
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
export { Queue };
