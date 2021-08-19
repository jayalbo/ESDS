import xxhash from "xxhash-wasm";
const { h32 } = await xxhash();
/**
 * BloomFilter Class
 * Represents a BloomFilter Object
 */
class BloomFilter {
  /**
   * BloomFilter Constructor
   * @param {number} [size=512] - Number of elements in the Bloom Filter, default 512
   * @param {number} [size=3] - Number of rounds of hashing, default 3
   */
  constructor(size = 512, hash = 3) {
    if (size <= 1) throw new Error("Size should be bigger than 1");
    if (hash < 1) throw new Error("Hash should be bigger than 1");

    this.size = size;
    this.hash = hash;

    // Create ArrayBuffer
    this.view = new DataView(new ArrayBuffer(this.size));
  }
  /**
   * Add a new element to the Bloom Filter
   * @param {string} input - Element to add - If array is provided all the elements will be added
   */
  add(input) {
    if (!Array.isArray(input)) input = [input];
    for (let value of input) {
      for (let i = 0; i < this.hash; i++) {
        value = h32(value);
        this.view.setInt8(parseInt(value, 16) % this.size, 1);
      }
    }
  }
  /**
   * Returns if element may be present in the Bloom Filter
   * @param {string} input - Element to check - If array is provided all the elements will be checked
   * @returns {boolean} - True - If element may be present, False if element is definitely not present, if array was provided an boolean array will be returned
   */
  has(input) {
    if (!Array.isArray(input)) {
      let value = input;
      for (let i = 0; i < this.hash; i++) {
        value = h32(value);
        if (!this.view.getInt8(parseInt(value, 16) % this.size)) return false;
      }
      return true;
    } else {
      const output = [];
      for (let value of input) output.push(this.has(value));
      return output;
    }
  }
}

export { BloomFilter };
