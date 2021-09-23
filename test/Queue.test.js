import { jest } from "@jest/globals";
import { Queue } from "../ESDS.js";

const queue = new Queue();

//Add sample values

queue.add([1, 2, 3]);
queue.add(4);
queue.add(5);
queue.add(6);

test("isEmpty ", () => {
  expect(queue.isEmpty).toBe(false);
});
test("toArray", () => {
  expect(queue.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
test("Size ", () => {
  expect(queue.size).toBe(6);
});

test("Poll ", () => {
  expect(queue.poll()).toBe(1);
  expect(queue.poll()).toBe(2);
  expect(queue.poll()).toBe(3);
});
test("Clear", () => {
  queue.clear();
  expect(queue.isEmpty).toBe(true);
});
