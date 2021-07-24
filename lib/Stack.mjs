/**
 * Represents an element in the List.
 */
class Node {
  /**
   * @param {any} [val] - The value of the element
   */
  constructor(val) {
    this.val = val ?? null;
    this.next = null;
  }
}

/**
 * Stack Class
 */
class Stack {
  constructor() {
    this.stack = new Node();
    this.head = this.stack;
    this.idx = 0;
  }
  /**
   * Push a new value to the stack
   * @param {any} val
   */
  push(val) {
    if (Array.isArray(val)) for (let v of val) this.push(v);
    else {
      let temp = new Node(val);
      temp.next = this.head.next;
      this.head.next = temp;
      this.idx++;
    }
  }
  /**
   * Retrieves and remove next element
   * @return {any} element
   */
  pop() {
    let temp = this.head.next?.val ?? null;
    this.head = this.head.next;
    this.idx--;
    return temp;
  }
  /**
   * Peek next element
   * @return {any} element
   */
  get peek() {
    return this.head.next?.val ?? null;
  }
  /**
   * Returns number of elements
   * @return {number} size
   */
  get size() {
    return this.idx;
  }
  /**
   * Returns true/false if stack is empty
   * @return {boolean}
   */
  get isEmpty() {
    return this.idx === 0;
  }
  /**
   * Converts and return an array from stack
   * @return {Array}
   */
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
