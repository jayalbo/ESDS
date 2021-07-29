import { PriorityQueue } from "../lib/PriorityQueue.mjs";

const minPQ = new PriorityQueue(); // Default min PQ
const maxPQ = new PriorityQueue("max"); // Default min PQ

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
