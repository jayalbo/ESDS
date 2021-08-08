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
 * List Class
 */
class List {
  constructor() {
    this.current = new Node();
    this.head = this.current;
    this.tail = this.current;
    this.idx = 0;
  }
  /**
   * Add a new value to the end list, unless index is provided
   * @param {any} val
   * @param {number=} idx
   */
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
  /**
   * Remove the value at index idx, if not provided removes the last element of the list
   * @param {number=} idx
   */
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
  /**
   * Clears the list
   */
  clear() {
    this.current = new Node();
    this.head = this.current;
    this.tail = this.current;
    this.idx = 0;
  }
  /**
   * Returns true/false if list is empty
   * @returns {boolean}
   */
  get isEmpty() {
    return this.idx === 0;
  }
  /**
   * Returns number of elements
   * @returns {number} size
   */
  get size() {
    return this.idx;
  }
  /**
   * Retrieves the list starting from index idx, if not provided retrieves head of list
   * @param {number=} idx
   */
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
  /**
   * Returns true/false if list contains value
   * @param {any} val
   * @returns {boolean}
   */
  contains(val) {
    let curr = this.head.next;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }
  /**
   * Returns a new list created from start,end indexes
   * @param {number} start
   * @param {number} end
   * @returns {boolean}
   */
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
  /**
   * Converts and return an array from list
   * @returns {Array}
   */
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
