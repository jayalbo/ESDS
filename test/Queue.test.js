import { Queue } from "../ESDS.js";

const queue = new Queue();

queue.add([1, 2, 3]);
queue.add(4);
queue.add(5);

while (!queue.isEmpty) {
  console.log(queue.poll());
}
