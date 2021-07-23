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
    if (idx) {
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
  remove(val, idx = null) {
    if (idx) {
      return false;
      /*
       * Todo: Remove from index
       */
    } else {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next;
      }
      curr.next = null;
    }
    this.idx--;
  }
  get size() {
    return this.idx;
  }
  get(idx = null) {
    if (!idx) return this.head;
    else {
      let curr = this.head;
      for (let i = 0; (i = idx); i++) {
        if (i < idx) curr = curr.next;
      }
      return curr;
    }
  }
}
export { List };
