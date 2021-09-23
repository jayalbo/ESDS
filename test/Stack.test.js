import { jest } from "@jest/globals";
import { Stack } from "../ESDS.js";

const stack = new Stack();

//Add sample values

stack.push([1, 2, 3]);
stack.push(4);
stack.push(5);
stack.push(6);

test("isEmpty ", () => {
  expect(stack.isEmpty).toBe(false);
});
test("toArray", () => {
  expect(stack.toArray()).toStrictEqual([6, 5, 4, 3, 2, 1]);
});

test("Size ", () => {
  expect(stack.size).toBe(6);
});

test("Pop ", () => {
  expect(stack.pop()).toBe(6);
  expect(stack.pop()).toBe(5);
  expect(stack.pop()).toBe(4);
});
test("Clear", () => {
  stack.clear();
  expect(stack.isEmpty).toBe(true);
});
