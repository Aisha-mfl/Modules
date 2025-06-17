import { linkedList } from "./linkedList.js";

export const Queue = () => {
  const myList = linkedList();

  return {
    enqueue: function (value) {
      myList.Append(value);
    },
    dequeue: function () {
      return myList.removeFromFront();
    },
    peek: function () {
      return myList.peek();
    },
    isEmpty: function () {
      return myList.isEmpty();
    },
    getSize: function () {
        return myList.getSize();
    },
    print: function () {
        return myList.print();
    },
  };
};
const queue = Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.getSize());
console.log("dequeue item", queue.dequeue(10));
queue.print();
console.log(queue.peek());
