import { jest } from "@jest/globals";
import { Trie } from "../ESDS.js";

const trie = new Trie();

const countries = [
  "United States of America",
  "Canada",
  "Argentina",
  "Japan",
  "Italy",
  "Germany",
  "Brazil",
  "Armenia",
  "Aruba",
];

countries.forEach((element) => trie.add(element)); // Add countries to the Trie

// Check if element exists
test("contains", () => {
  expect(trie.contains("Argentina")).toBe(true);
  expect(trie.contains("France")).toBe(false);
});

// Update & get
test("get", () => {
  trie.update("Argentina", "🇦🇷");
  trie.update("United States of America", "🇺🇸");

  expect(trie.get("Argentina")).toBe("🇦🇷");
  expect(trie.get("United States of America")).toBe("🇺🇸");
});

// DFS (Prefix)
let resultArr = [];

const dfs = (word, node) => {
  if (node.child?.size > 0) {
    node.child.forEach((value) => {
      dfs(`${word}${value.key}`, value);
    });
  }
  if (node.end) resultArr.push(word);
};
dfs("Ar", trie.find("Ar"));

test("find ", () => {
  expect(resultArr).toStrictEqual(["Argentina", "Armenia", "Aruba"]);
});
