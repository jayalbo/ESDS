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
      this.comparator(this.PQ[idx], this.PQ[this.#parent(idx)]) < 0
    ) {
      this.#swap(idx, this.#parent(idx));
      idx = this.#parent(idx);
    }
  }

  /** Swap two elements **/
  #swap = (idx1, idx2) =>
    ([this.PQ[idx1], this.PQ[idx2]] = [this.PQ[idx2], this.PQ[idx1]]);

  /** Get parent of element **/
  #parent = (idx) => Math.floor(idx - 1 / 2);

  /** Get children of element
   * @param {string=} val - left || right **/
  #child = (idx, val) => 2 * idx + (val === "left" ? 1 : 2);

  /** Heapify - Convert tree into heap **/
  #heapify = (idx = 0) => {
    let needle = idx;
    const leftChildIdx = this.#child(idx, "left");
    const rightChildIdx = this.#child(idx, "right");

    if (
      leftChildIdx <= this.PQ.length - 1 &&
      this.comparator(this.PQ[needle], this.PQ[leftChildIdx]) > 0
    )
      needle = leftChildIdx;
    if (
      rightChildIdx <= this.PQ.length - 1 &&
      this.comparator(this.PQ[needle], this.PQ[rightChildIdx]) > 0
    )
      needle = rightChildIdx;

    if (needle !== idx) {
      this.#swap(needle, idx);
      this.#heapify(needle);
    }
  };

  /**
   * Retrieves and remove element with the highest priority
   * @returns {any} element
   */
  poll() {
    const idx = this.PQ.length - 1;
    this.#swap(0, idx); // Swap 1st -> Last
    const tmp = this.PQ.pop();
    this.#heapify();
    return tmp;
  }

  /**
   * Returns true/false if PQ contains certain value among its entries,
   * @param {any} val - The value to search for.
   * @returns {boolean}
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
   * @returns {number} size
   */
  get size() {
    return this.PQ.length;
  }
  /**
   * Returns true/false if PQ is empty
   * @returns {boolean}
   */
  get isEmpty() {
    return this.PQ.length === 0;
  }
  /**
   * Converts and return an array from stack
   * @returns {Array}
   */
  toArray() {
    return this.PQ;
  }
  /**
   * Peek heap element
   * @returns {any} element
   */
  get peek() {
    return this.PQ[0] ?? null;
  }
}

export { PriorityQueue };
