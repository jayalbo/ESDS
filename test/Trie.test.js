import { Trie } from "../lib/Trie.mjs";
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

const trie = new Trie();

countries.forEach((element) => trie.add(element)); // Add countries to the Trie

// Check if element exists
console.log(trie.contains("Argentina")); // True
console.log(trie.contains("Spain")); // False

// Update content
trie.update("Argentina", "🇦🇷");
trie.update("United States of America", "🇺🇸");

// Get content
console.log(trie.get("Argentina")); // 🇦🇷
console.log(trie.get("United States of America")); // 🇺🇸

// Retrieve Sub-Trie (DFS)
const prefix = "Ar";
const result = trie.find(prefix);

const dfs = (word, node) => {
  if (node.child?.size > 0) {
    node.child.forEach((value) => {
      dfs(`${word}${value.key}`, value);
    });
  }
  if (node.end) console.log(`${word}`);
  /*  
    Argentina
    Armenia
    Aruba
  */
};
dfs(prefix, result);
