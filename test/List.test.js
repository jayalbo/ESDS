import { jest } from "@jest/globals";
import { List } from "../ESDS.js";

const list = new List();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);

test("isEmpty", () => expect(list.isEmpty).toBe(false));
test("Size", () => expect(list.size).toBe(6));
test("Get", () => {
  expect(list.get(1).val).toBe(1);
  expect(list.get(6).val).toBe(6);
});
test("Contains ", () => {
  expect(list.contains(10)).toBe(false);
  expect(list.contains(4)).toBe(true);
});

test("toArray ", () => {
  //Remove 1st Element
  list.remove(1);
  expect(list.toArray()).toStrictEqual([2, 3, 4, 5, 6]);
});
test("Clear ", () => {
  list.clear();
  expect(list.isEmpty).toBe(true);
});
