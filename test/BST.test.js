import { BST } from "../lib/BST.mjs";
import { List } from "../lib/LinkedList.mjs";

const bst = new BST();

// Add Elements
bst.add(10, "Ten");
bst.add(1, "One");
bst.add(5, "Five");
bst.add(7, "Seven");
bst.add(2, "Two");
bst.add(0, "Zero");
bst.add(8, "Eight");

console.log(bst.toArray("in-order"));
// [ 0, 1, 2, 5, 7, 8, 10 ]
console.log(bst.toArray("pre-order"));
// [ 10, 1, 0, 5, 2, 7, 8 ]
console.log(bst.toArray("post-order"));
// [ 0, 2,  8, 7, 5, 1, 10 ]
console.log(bst.toArray("reverse-in-order"));
// [ 10, 8, 7, 5, 2, 1, 0 ]

// Get Element
console.log(bst.get(7));
/*
    TreeElement {
    key: 7,
    value: 'Seven',
    left: null,
    right: TreeElement { key: 8, value: 'Eight', left: null, right: null }
    }
*/

// Update Element
bst.update(8, "はち");
console.log(bst.get(8).value); // はち

// Has
console.log(bst.has(5)); // true

// Remove Element
bst.remove(5);
console.log(bst.has(5)); // false

// Handling duplicates (Using Linked-list)
if (bst.has(7)) {
  // true
  const list = new List();
  list.add(bst.get(7).value); // Added "Seven"
  list.add(["Siete", "しち", "七", "Sieben"]);
  bst.update(7, list);
}
console.log(bst.get(7).value.toArray());
// [ 'Seven', 'Siete', 'しち', '七', 'Sieben' ]

// Remove Elements using an iterator in order to prevent a significant unbalanced BST

// JS Generator function
function* iterator(arr) {
  let i = 0;
  while (true) {
    yield arr[i++];
    if (i === arr.length) i = 0;
  }
}

const removeType = iterator(["predecessor", "successor"]); // in-order predecessor, and in-order successor
[10, 1, 0, 5, 7].forEach((value) => bst.remove(value, removeType.next().value));

console.log(bst.toArray()); // Default: in-order
// [ 2, 8 ]
