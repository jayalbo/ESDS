import { Queue } from "../JSDS.mjs";

const queue = new Queue();

const arr = Array(10)
  .fill(0)
  .map((x, i) => i + 1);

queue.add(arr);

while (!queue.isEmpty) {
  console.log(queue.poll());
}
