import { BloomFilter } from "../lib/BloomFilter.mjs";

// Create BF
const BF = new BloomFilter();

// Add individual users
BF.add("john_89@email.com");
BF.add("jane2020@email.com");
BF.add("Joe@email.com");
BF.add("Doe.Jane@email.com");
BF.add("Jim.1990@email.com");

// Check individual users
console.log(BF.has("Doe.Jane@email.com")); // True (User may exists)
console.log(BF.has("Jimmy@email.com")); // False

// Create second BF
const BF2 = new BloomFilter(2048, 4); // Size 2048, Num. Hash rounds 4

const users = [
  "almost",
  "dopey",
  "eritrean",
  "struggle",
  "hospitable",
  "factor",
  "quail",
];

// Add multiple users
BF2.add(users);

// Check individual users
console.log(BF2.has("struggle")); // True (User may exists)
console.log(BF2.has("house")); // False

// Check multiple values
console.log(
  BF2.has(["hospitable", "monitor", "dopey", "factor", "fan", "quail"])
);
// [ true, false, true, true, false, true ]
