/**
 * Priority Queue
 * @constructor
 * @param {string=} type - (min|max|custom) - default min. If custom {comparator} should be provided
 * @param {function=} comparator - Custom comparator function. E.g. (a,b) => a.priority - b.priority
 */
class PriorityQueue {
  constructor(type = "min", comparator = null) {
    if (!["min", "max", "custom"].includes(type))
      throw new Error("Invalid type");
    if (comparator && typeof comparator !== "function")
      throw new Error("Invalid comparator function");

    const min = (a, b) => a - b; // Min heap
    const max = (a, b) => b - a; // Max heap

    this.comparator = type === "min" ? min : type === "max" ? max : comparator;
    this.PQ = [];
  }
  /**
   * Add a new value to the queue
   * @param {any} val
   */
  add(val) {
    this.PQ.push(val);
    let idx = this.PQ.length - 1;

    while (
      idx > 0 &&
      this.comparator(this.PQ[idx], this.PQ[this._parent(idx)]) < 0
    ) {
      this._swap(idx, this._parent(idx));
      idx = this._parent(idx);
    }
  }
  _swap = (idx1, idx2) => {
    [this.PQ[idx1], this.PQ[idx2]] = [this.PQ[idx2], this.PQ[idx1]];
  };
  _parent = (idx) => (!(idx % 2) ? (idx - 2) / 2 : (idx - 1) / 2);
  _child = (idx, val) => (val === "left" ? 2 * idx + 1 : 2 * idx + 2);

  _heapify = (idx = 0) => {
    let needle = idx;

    const leftIdx = this._child(idx, "left");
    const rightIdx = this._child(idx, "right");

    if (
      leftIdx < this.PQ.length - 1 &&
      this.comparator(this.PQ[needle], this.PQ[leftIdx]) > 0
    )
      needle = leftIdx;
    if (
      rightIdx < this.PQ.length - 1 &&
      this.comparator(this.PQ[needle], this.PQ[rightIdx]) > 0
    )
      needle = rightIdx;

    if (needle !== idx) {
      this._swap(needle, idx);
      this._heapify(needle);
    }
  };

  /**
   * Retrieves and remove element with the highest priority
   * @return {any} element
   */
  poll() {
    const idx = this.PQ.length - 1;
    this._swap(0, idx); // Swap 1st -> Last
    const tmp = this.PQ.pop();
    this._heapify();
    return tmp;
  }

  /**
   * Returns true/false if PQ contains certain value among its entries,
   * @param {any} val - The value to search for.
   * @return {boolean}
   */
  contains(val) {
    if (typeof val !== "object") return this.PQ.includes(val);
    return this.PQ.some(
      (element) => JSON.stringify(element) === JSON.stringify(val)
    );
  }
  /**
   * Clears the PQ
   */
  clear() {
    this.PQ.length = 0;
  }
  /**
   * Returns number of elements
   * @return {number} size
   */
  get size() {
    return this.PQ.length;
  }
  /**
   * Returns true/false if PQ is empty
   * @return {boolean}
   */
  get isEmpty() {
    return this.PQ.length === 0;
  }
  /**
   * Converts and return an array from stack
   * @return {Array}
   */
  toArray() {
    return this.PQ;
  }
  /**
   * Peek heap element
   * @return {any} element
   */
  get peek() {
    return this.PQ[0] ?? null;
  }
}

export { PriorityQueue };
