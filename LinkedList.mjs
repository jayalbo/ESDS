class Node {
  constructor(val) {
    this.val = val ?? null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.current = new Node();
    this.head = this.current;
    this.tail = this.current;
    this.idx = 0;
  }
  add(val, idx = null) {
    if (Array.isArray(val)) {
      for (let v of val) this.add(v);
    } else if (idx) {
      let curr = this.head;
      for (let i = 0; i < idx - 1; i++) curr = curr.next;
      let temp = curr.next;
      curr.next = new Node(val);
      curr.next.next = temp;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.idx++;
  }
  remove(idx = null) {
    if (idx) {
      if (idx < 1 || idx > this.size) return null;
      if (idx === 1) this.head = this.head.next;
      else {
        let curr = this.head.next;
        for (let i = 1; i < idx - 1; i++) {
          curr = curr.next;
        }
        curr.next = curr.next.next;
      }
    } else {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      curr.next = null;
    }
    this.idx--;
  }
  clear() {
    this.current = new Node();
    this.head = this.current;
    this.tail = this.current;
    this.idx = 0;
  }
  get isEmpty() {
    return this.idx === 0;
  }
  get size() {
    return this.idx;
  }
  get(idx = null) {
    if (!idx) return this.head.next;
    else if (idx > this.size) return null;
    else {
      let curr = this.head;
      for (let i = 0; i < idx; i++) {
        curr = curr.next;
      }
      return curr;
    }
  }
  contains(val) {
    let curr = this.head.next;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }
  subList(start, end) {
    if (start < 1 || end > this.size) return null;
    const arr = [];
    let curr = this.head.next;
    let idx = 1;
    while (curr) {
      if (idx >= start && idx <= end) arr.push(curr.val);
      curr = curr.next;
      idx++;
    }
    let temp = new List();
    temp.add(arr);
    return temp;
  }
  toArray() {
    const arr = [];
    let curr = this.head.next;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}
export { List };
