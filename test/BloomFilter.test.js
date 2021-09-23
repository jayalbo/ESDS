import { jest } from "@jest/globals";
import { BloomFilter } from "../ESDS.js";

const BF = new BloomFilter();

// Add values
BF.add("Brightonix");
BF.add("DeskPlot");
BF.add("Diumbook");
BF.add("Famousedbo");
BF.add("Fracrian");
BF.add("Frasererei");
BF.add("Furust");
BF.add("Groupme");

test("Has (true)", () => {
  expect(BF.has("Brightonix")).toBe(true);
  expect(BF.has("DeskPlot")).toBe(true);
  expect(BF.has("Diumbook")).toBe(true);
  expect(BF.has("Famousedbo")).toBe(true);
  expect(BF.has("Fracrian")).toBe(true);
  expect(BF.has("Frasererei")).toBe(true);
  expect(BF.has("Furust")).toBe(true);
  expect(BF.has("Groupme")).toBe(true);
});

test("Has (false)", () => {
  expect(BF.has("foo")).toBe(false);
  expect(BF.has("bar")).toBe(false);
  expect(BF.has("baz")).toBe(false);
  expect(BF.has("foobar")).toBe(false);
});
