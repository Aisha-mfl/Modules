// function Queue() {
//   let item = [];

//   return {
//     enqueue: function (element) {
//       item.push(element);
//     },
//     dequeue: function () {
//       return item.shift();
//     },
//     isempty: function () {
//       return item.length === 0;
//     },
//     peek: function () {
//       if (!this.isempty()) {
//         return item[0];
//       }
//       return null;
//     },
//     size: function () {
//       return item.length;
//     },
//     print: function () {
//       console.log(item.toString());
//     },
//   };
// }
// const queue = new Queue();

// console.log(queue.isempty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.size());
// queue.print();
// console.log(queue.dequeue());
// console.log(queue.peek());

//optimized

// function Queue() {
//   let item = {};
//   let front = 0;
//   let rear = 0;
//   return {
//     enqueue: function (element) {
//       item[rear] = element;
//       rear++;
//     },
//     dequeue: function () {
//       const Item = item[front];
//       delete Item[front];
//       front++;
//       return Item;
//     },
//     isEmpty: function () {
//       return rear - front === 0;
//     },
//     peek: function () {
//       return item[front];
//     },
//     size: function () {
//       return rear - front;
//     },
//     print: function () {
//       console.log(item);
//     },
//   };
// }
// const queue = new Queue();

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.size());
// queue.print();
// console.log(queue.dequeue());
// console.log(queue.peek());

//circular queue

function Queue(capacity) {
  let item = new Array(capacity);
  let currentLength = 0;
  let front = -1;
  let rear = -1;
  return {
    isFull: function () {
      return currentLength === capacity;
    },
    isEmpty: function () {
      return currentLength === 0;
    },
    enqueue: function (element) {
      if (!this.isFull()) {
        rear = (rear + 1) % capacity;
        item[rear] = element;
        currentLength += 1;
        if (front === -1) {
          front = rear;
        }
      }
    },
    dequeue: function () {
      if (this.isEmpty()) {
        return null;
      }
      const Item = item[front];
      item[front] = null;
      front = (front + 1) % capacity;
      currentLength -= 1;
      if (this.isEmpty()) {
        front = -1;
        rear = -1;
      }
      return Item;
    },
    peek: function () {
      if (!this.isEmpty()) {
        return item[front];
      }
    },
    print: function () {
      if (this.isEmpty()) {
        console.log("queue is empty");
      } else {
        let i;
        let str = "";
        for (i = front; i !== rear; i = (i + 1) % capacity) {
          str += item[i] + " ";
        }
        str += item[i];
        console.log(str);
      }
    },
  };
}
const queue = new Queue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();