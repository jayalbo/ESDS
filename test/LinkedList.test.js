import { List } from "../ESDS.js";

const a = new List();

a.add([1, 2, 3, 4]);

console.log(a.toArray()); // [1, 2, 3, 4]

a.add(5);
a.add("Six");
a.add({ value: 7, str: "Seven" });

console.log(a.get(6).val); // "Six"

let head = a.get();
while (head) {
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
{value: 7, str: 'Seven'}
*/

let b = a.subList(2, 5);
console.log(b.toArray());
// let list = new List();

// list.add([1, 2, 6, 3, 7]);
// console.log(list.toArray());

// let list2 = list.subList(2, 4);
// console.log(list2.toArray());
// list.remove(1);
// console.log("Remove idx 1 from List 1");
// console.log(list.toArray());
// console.log(list2.toArray());
