import { Stack } from "../JSDS.mjs";

let stack = new Stack();

const arr = Array(10)
  .fill(0)
  .map((x, i) => i + 1);

stack.push(arr);

while (!stack.isEmpty) {
  console.log(stack.pop());
}
