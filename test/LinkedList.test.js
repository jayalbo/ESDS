import { List } from "../ESDS.mjs";

let list = new List();

list.add([1, 2, 6, 3, 7]);
console.log(list.toArray());

let list2 = list.subList(2, 4);
console.log(list2.toArray());
list.remove(1);
console.log("Remove idx 1 from List 1");
console.log(list.toArray());
console.log(list2.toArray());
