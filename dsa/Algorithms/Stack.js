//stack using array

function stack(capacity) {
  let top = -1;
  let cap = capacity;
  let item = [];

  return {
    push: function (x) {
      if (top >= cap - 1) {
        console.log("stack overflowed");
        return false;
      }
      item[++top] = x;
      return true;
    },
    pop: function () {
      if (top < 0) {
        console.log("stack underflow");
        return null;
      }
      return item[top--];
    },
    peek: function () {
      if (top < 0) {
        console.log("stack is empty");
        return null;
      }
      return item[top];
    },
    isempty: function () {
      return top < 0;
    },
    print: function () {
      console.log(item.slice(0, top + 1).join("<-"));
    },
  };
}
const s = stack(5);

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
//console.log(s.push() + " pushed from stack");
console.log(s.pop() + " popped from stack"); 
console.log("Top element is:", s.peek());    

console.log("Elements present in stack:");
while (!s.isempty()) {
    console.log(s.peek());
    s.pop();
}
