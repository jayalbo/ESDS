import { jest } from "@jest/globals";
import { BST } from "../ESDS.js";

const bst = new BST();

// Add BST

bst.add(50, "fifty");
bst.add(20, "twenty");
bst.add(80, "eighty");
bst.add(10, "ten");
bst.add(40, "forty");
bst.add(70, "seventy");
bst.add(30, "thirty");

// toArray
test("toArray (in-order) ", () => {
  expect(bst.toArray("in-order")).toStrictEqual([10, 20, 30, 40, 50, 70, 80]);
});
test("toArray (pre-order) ", () => {
  expect(bst.toArray("pre-order")).toStrictEqual([50, 20, 10, 40, 30, 80, 70]);
});
test("toArray (post-order) ", () => {
  expect(bst.toArray("post-order")).toStrictEqual([10, 30, 40, 20, 70, 80, 50]);
});
test("toArray (reverse-in-order) ", () => {
  expect(bst.toArray("reverse-in-order")).toStrictEqual([
    80, 70, 50, 40, 30, 20, 10,
  ]);
});

// Has
test("has", () => {
  expect(bst.has(70)).toBe(true);
  expect(bst.has(90)).toBe(false);
});

// Get
test("get", () => {
  expect(bst.get(80).value).toBe("eighty");
});

// Update
test("update ", () => {
  bst.update(80, "ochenta");
  expect(bst.get(80).value).toBe("ochenta");
});

// Remove
test("remove ", () => {
  bst.remove(80);
  expect(bst.has(80)).toBe(false);
});
