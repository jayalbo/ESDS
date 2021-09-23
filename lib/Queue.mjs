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
 * Queue Class
 */
class Queue {
  constructor() {
    this.queue = new Node();
    this.head = this.queue;
    this.tail = this.queue;
    this.idx = 0;
  }
  /**
   * Add a new value to the queue
   * @param {any} val
   */
  add(val) {
    if (Array.isArray(val)) for (let v of val) this.add(v);
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.idx++;
    }
  }
  /**
   * Retrieves and remove next element
   * @returns {any} element
   */
  poll() {
    let temp = this.head.next?.val ?? null;
    this.head = this.head.next;
    this.idx--;
    return temp;
  }
  /**
   * Peek next element
   * @returns {any} element
   */
  get peek() {
    return this.head.next?.val ?? null;
  }
  /**
   * Returns number of elements
   * @returns {number} size
   */
  get size() {
    return this.idx;
  }
  /**
   * Returns true/false if queue is empty
   * @returns {boolean}
   */
  get isEmpty() {
    return this.idx === 0;
  }
  /**
   * Converts and return an array from queue
   * @returns {Array}
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
  /**
   * Removes all the elements in the queue
   */
  clear() {
    this.head = null;
    this.idx = 0;
  }
}
export { Queue };
