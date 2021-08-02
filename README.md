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
    ES Javascript Data Structures (Priority Queue, Trie, Queue, Stack, Linked List)
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
    <li><a href="#usage">Usage 📚</a>
      <ul>
       <li><a href="#usage">Examples 📑</a>
          <ul>
            <li><a href="#priority-queue">Priority Queue 📚</a></li>
            <li><a href="#trie">Trie 🌲</a></li>
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

```

#### Use cases: Auto-complete, string search, word suggestion, prefix, IP routing, etc.

#### Word Prediction Example: https://bit.ly/37hYhPL

![Word Prediction](https://i.imgur.com/RVvFlyk.gif)

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
