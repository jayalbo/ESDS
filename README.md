[![Contributors][contributors-shield]][contributors-url]
[![Downloads][downloads-shield]][downloads-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">ESDS</h3>

  <p align="center">
    ES Javascript Data Structures (Priority Queue, Binary Search Tree (BST), Graph, Trie, Bloom Filter, Queue, Stack, Linked List)
    <br />
    <a href="https://jayalbo.github.io/ESDS/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jayalbo/ESDS/issues">Report Bug 🐞</a>
    ·
    <a href="https://github.com/jayalbo/ESDS/discussions">Request Feature 🗳</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started 🚦 </a>
      <ul>
        <li><a href="#installation">Installation 💾</a></li>
      </ul>
    </li>
    <li><a href="#examples">Usage 📚</a>
      <ul>
       <li><a href="#examples">Examples 📑</a>
          <ul>
            <li><a href="#priority-queue">Priority Queue 📚</a></li>
            <li><a href="#binary-search-tree">Binary Search Tree (BST) 🎄</a></li>
            <li><a href="#graph">Graph ፨</a>
              <ul>
                <li><a href="#undirected">Undirected ↔</a></li>
                <li><a href="#directed">Directed →</a></li>
              </ul>
            </li>
            <li><a href="#trie">Trie 🌲</a></li>
            <li><a href="#bloom-filter">Bloom Filter ⚘</a></li>
            <li><a href="#queue-stack">Queue 📚 / Stack 🥞</a></li>
            <li><a href="#linked-list">Linked List📝</a></li>
          </ul>
       </li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap 📍</a></li>
    <li><a href="#contributing">Contributing 💪</a></li>
    <li><a href="#license">License 📝</a></li>
    <li><a href="#contact">Contact 📧</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Install NPM package
   ```sh
   npm i esds
   ```

<!-- USAGE EXAMPLES -->

## Examples

### Priority Queue

```javascript
import { PriorityQueue } from "esds";

const minPQ = new PriorityQueue("min"); // min PQ (default if not provided)
const maxPQ = new PriorityQueue("max"); // max PQ

const arr = [20, 40, 30, 50, 15, 10, 5];

arr.forEach((element) => {
  minPQ.add(element);
  maxPQ.add(element);
});

console.log(minPQ.peek); // 5
console.log(maxPQ.peek); // 50

while (!minPQ.isEmpty) {
  console.log(minPQ.poll());
}
/*
5
10
15
20
40
30
50
*/

while (!maxPQ.isEmpty) {
  console.log(maxPQ.poll());
}
/*
50
40
30
20
15
10
5
*/

// Custom comparator

const comparator = (a, b) => a.age - b.age; // Using age (min)
const customPQ = new PriorityQueue("custom", comparator);
const Person = function (name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
};

customPQ.add(new Person("Jane Doe", 26, "Software Engineer"));
customPQ.add(new Person("John Doe", 28, "Cloud Engineer"));
customPQ.add(new Person("Ordinary Joe", 42, "QA"));
customPQ.add(new Person("Janie Doe", 20, "Support Engineer"));
customPQ.add(new Person("Fred Bloggs", 19, "Intern"));

// Contains function using object
console.log(customPQ.contains(new Person("Janie Doe", 20, "Support Engineer"))); // true

// Poll
while (!customPQ.isEmpty) {
  console.log(customPQ.poll());
}
/*
{ name: 'Fred Bloggs', age: 19, role: 'Intern' }
{ name: 'Janie Doe', age: 20, role: 'Support Engineer' }
{ name: 'Jane Doe', age: 26, role: 'Software Engineer' }
{ name: 'Ordinary Joe', age: 42, role: 'QA' }
{ name: 'John Doe', age: 28, role: 'Cloud Engineer' }
*/
```

### Binary Search Tree

```Javascript
import { BST, List} from "esds";


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
if (bst.has(7)) {   // true
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
```

### Graph

#### Undirected

```Javascript
import { Graph } from "esds";

const graph = new Graph(); // Creates a new undirected graph

// Add nodes (Users)
graph.addNode(1, "Randall");
graph.addNode(2, "Mellisa");
graph.addNode(3, "Cecelia");
graph.addNode(4, "Velda");
graph.addNode(5, "Rossie");

//Add Edges (Friendships)
graph.addEdge(1, 2); // Randall - Mellisa
graph.addEdge(2, 5); // Mellisa - Rossie
graph.addEdge(3, 4); // Cecelia - Velda
graph.addEdge(4, 1); // Velda - Randall
graph.addEdge(5, 1); // Rossie - Randall

// Check if connection exists (Users are friends)
console.log(graph.nodesConnected(2, 3)); // Mellisa & Cecelia: Output: false
console.log(graph.nodesConnected(1, 5)); // Randall & Rossie: Output: true

// Check distance between two nodes (Users)
console.log(graph.getWeight(2, 3)); // Mellisa & Cecelia: Output: 3rd level friends
console.log(graph.getWeight(1, 5)); // Randall & Rossie: Output: 1st level friends (Users are friends)

// Get Path between nodes (Friendship relation between two users)
console.log(graph.getPath(2, 3).map((value) => graph.getNode(value.node)));
//  [ 'Mellisa', 'Randall', 'Velda', 'Cecelia' ]
console.log(graph.getPath(1, 5).map((value) => graph.getNode(value.node)));
//  [ 'Randall', 'Rossie' ]
```

#### Directed

```Javascript
import { Graph } from "esds";

const graph = new Graph(true); // Creates a new directed graph

// Add Nodes (Cities)
graph.addNode(1, "City Α");
graph.addNode(2, "City β");
graph.addNode(3, "City Γ");
graph.addNode(4, "City Δ");
graph.addNode(5, "City ε");

// Add Edges (Routes between cities (one-way))
graph.addEdge(1, 3, 75); // Alpha (Α) -> Gamma (Γ), distance 75 miles
graph.addEdge(2, 5, 325); // Beta (β) -> Epsilon (ε), distance 325 miles
graph.addEdge(3, 1, 125); //  Gamma (Γ) -> Alpha (α), distance 125 miles
graph.addEdge(4, 2, 100); // Delta (Δ) -> Beta (β), distance 100 miles
graph.addEdge(5, 1, 415); // Epsilon (ε) -> Alpha (Α), distance 415 miles
graph.addEdge(5, 3, 550); // Epsilon (ε) -> Gamma (Γ), distance 550 miles

// Check if connection exists (Route between cities exists)
console.log(graph.nodesConnected(2, 3)); // Beta & Gamma: Output: false
console.log(graph.nodesConnected(5, 1)); // Epsilon & Alpha: Output: true

// Get Path between nodes (Route between two cities) by lowest number of intermediate nodes
let routeADistance = 0;
const routeA = graph.getPath(2, 3).map((value) => {
  // Between Beta (β) & Gamma (Γ)
  routeADistance += value.weight;
  return graph.getNode(value.node);
});
console.log(routeA, routeADistance);
/*
  ([Route] Total distance in miles)
  [ 'City β', 'City ε', 'City Γ' ] 875
*/

// Get Path between nodes (Route between two cities) by lowest distance (Dijkstra algorithm)
let routeB = graph.getPathWeighted(2, 3); // Between Beta (β) & Gamma (Γ)
let routeBDistance = routeB.distance;
routeB = routeB.nodes.map((value) => graph.getNode(value));
console.log(routeB, routeBDistance);
/*
  ([Route] Total distance in miles)
  [ 'City β', 'City ε', 'City Α', 'City Γ' ] 815
*/
```

#### Use cases: Social graphs, recommendation engines, navigation, supply chain, etc.

#### Flight Routes Example: https://bit.ly/3ApNrDA

![Flight Routes](https://i.imgur.com/XZdmzAW.jpg)

### Trie

```Javascript
import { Trie } from "esds";

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

// toArray()
console.log(trie.toArray());

/*
  ['United States of America','Canada', 'Argentina', 'Armenia',
   'Aruba', 'Japan', 'Italy', 'Germany','Brazil']
*/

```

#### Use cases: Auto-complete, string search, word suggestion, prefix, IP routing, etc.

#### Word Prediction Example: https://bit.ly/37hYhPL

![Word Prediction](https://i.imgur.com/RVvFlyk.gif)

### Bloom Filter

#### A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. More Info: https://bit.ly/3D9RmH8

```Javascript
import { BloomFilter } from "esds";

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

```

#### Bloom Filters use cases:

- Value lookup when false positives are acceptable
- Avoid expensive lookup operations against DB
- Content filtering

### Queue-Stack

```JavaScript
import {Queue, Stack} from 'esds';

const queue = new Queue();
const stack = new Stack();

queue.add([1,2,3]);
queue.add(4);
queue.add(5);

stack.push([1,2]);
stack.add(3);
stack.add([4,5]);

while (!queue.isEmpty){
    console.log(queue.poll()); // 1, 2, 3, 4, 5
}

while (!stack.isEmpty){
    console.log(stack.pop()); // 5, 4, 3, 2, 1
}
```

#### Linked List

```JavaScript
import {List} from 'esds';

const a = new List();
a.add([1, 2, 3, 4]);
console.log(a.toArray()); // [1, 2, 3, 4]

a.add(5);
a.add("Six");
a.add({value: 7, str: "Seven"});
console.log(a.get(6).val); // "Six"

let head = a.get();
while(head){
    console.log(head.val);
    head = head.next;
}
/*
1
2
3
4
5
"Six"
{value: 7, str: "Seven"}
*/

let b = a.subList(2, 5);
console.log(b.toArray()); // [2, 3, 4, 5]
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/jayalbo/ESDS/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/jayalbo/ESDS](https://github.com/jayalbo/ESDS)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jayalbo/ESDS.svg?style=for-the-badge
[contributors-url]: https://github.com/jayalbo/ESDS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jayalbo/ESDS.svg?style=for-the-badge
[forks-url]: https://github.com/jayalbo/ESDS/network/members
[stars-shield]: https://img.shields.io/github/stars/jayalbo/ESDS.svg?style=for-the-badge
[stars-url]: https://github.com/jayalbo/ESDS/stargazers
[issues-shield]: https://img.shields.io/github/issues/jayalbo/ESDS.svg?style=for-the-badge
[issues-url]: https://github.com/jayalbo/ESDS/issues
[license-shield]: https://img.shields.io/github/license/jayalbo/ESDS.svg?style=for-the-badge
[license-url]: https://github.com/jayalbo/ESDS/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[downloads-shield]: https://img.shields.io/npm/dw/esds?style=for-the-badge
[downloads-url]: https://www.npmjs.com/package/esds
