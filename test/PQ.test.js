import { jest } from "@jest/globals";
import { PriorityQueue } from "../ESDS.js";

// Min PQ

const minPQ = new PriorityQueue("min");
minPQ.add(50);
minPQ.add(40);
minPQ.add(60);
minPQ.add(5);
minPQ.add(45);
minPQ.add(1);

test("isEmpty ", () => expect(minPQ.isEmpty).toBe(false));
test("Size ", () => expect(minPQ.size).toBe(6));

test("Dequeue (Poll) ", () => {
  expect(minPQ.poll()).toBe(1);
  expect(minPQ.poll()).toBe(5);
  expect(minPQ.poll()).toBe(40);
  expect(minPQ.poll()).toBe(45);
  expect(minPQ.poll()).toBe(50);
});
test("Peek", () => expect(minPQ.peek).toBe(60));
test("Clear", () => {
  minPQ.clear();
  expect(minPQ.isEmpty).toBe(true);
});

// Max PQ
const maxPQ = new PriorityQueue("max");
maxPQ.add(50);
maxPQ.add(40);
maxPQ.add(60);
maxPQ.add(5);
maxPQ.add(45);
maxPQ.add(1);

test("Dequeue (Poll) ", () => {
  expect(maxPQ.poll()).toBe(60);
  expect(maxPQ.poll()).toBe(50);
  expect(maxPQ.poll()).toBe(45);
  expect(maxPQ.poll()).toBe(40);
  expect(maxPQ.poll()).toBe(5);
  expect(maxPQ.poll()).toBe(1);
});

// Custom Comparator
const comparatorFunction = (a, b) => a.name.localeCompare(b.name); // Object -> String
const customPQ = new PriorityQueue("custom", comparatorFunction);

customPQ.add({ name: "Tim" });
customPQ.add({ name: "Jane" });
customPQ.add({ name: "Mary" });
customPQ.add({ name: "Jay" });
customPQ.add({ name: "Bill" });
customPQ.add({ name: "Amanda" });
customPQ.add({ name: "Adam" });

test("Dequeue (Poll) ", () => {
  expect(customPQ.poll().name).toBe("Adam");
  expect(customPQ.poll().name).toBe("Amanda");
  expect(customPQ.poll().name).toBe("Bill");
  expect(customPQ.poll().name).toBe("Jane");
  expect(customPQ.poll().name).toBe("Jay");
  expect(customPQ.poll().name).toBe("Mary");
  expect(customPQ.poll().name).toBe("Tim");
});
