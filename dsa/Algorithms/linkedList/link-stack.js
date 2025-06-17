const linkedList = require("./linkedList");

function Stack() {
  list = new linkedList();
  return {
    push: function (value) {
      list.prepend(value);
    },
    pop: function () {
      return list.removeFromFront();
    },
    peek: function () {
      return list.peek();
    },
    isEmpty: function () {
      return list.isEmpty();
    },
    getSize: function () {
      return list.getSize();
    },
    print: function () {
      return list.print();
    },
  };
}
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.getSize());
console.log("pop item", stack.pop(10));
console.log(stack.peek());
