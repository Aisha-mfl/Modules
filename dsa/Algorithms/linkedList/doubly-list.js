function Node(val) {
  let value = val;
  let next = null;
  let prev = null;
  return { prev, next, value };
}
export const DoublyLinkedList = () => {
  let head = null;
  let tail = null;
  let size = 0;
  return {
    isEmpty: function () {
      return size === 0;
    },
    getSize: function () {
      return size;
    },
    prepend: function (value) {
      const node = Node(value);
      if (this.isEmpty()) {
        head = node;
        tail = node;
      } else {
        node.next = head;
        head.prev = node;
        head = node;
      }
      size++;
    },
    append: function (value) {
      const node = Node(value);
      if (this.isEmpty()) {
        head = node;
        tail = node;
      } else {
        tail.next = node;
        node.prev = tail;
        tail = node;
      }
      size++;
    },
    removeFromFront: function () {
      if (this.isEmpty()) return null;
      else {
        const value = head.value;
        if (size === 1) {
          head = null;
          tail = null;
        } else {
          head.next.prev = null;
          head = head.next;
        }
        size--;
        return value;
      }
    },
    removeFromEnd: function () {
      if (this.isEmpty()) {
        return null;
      }
      const value = tail.value;
      if (size === 1) {
        head = null;
        tail = null;
      } else {
        tail.prev.next = null;
        tail = tail.prev;
      }
      size--;
      return value;
    },
    //insertion at the end
    insert: function (value, index) {
      if (index < 0 || index > size) {
        console.log("index out of bounds");
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else if (index === size) {
        this.append(value);
      } else {
        const mid = Math.floor((0 + size) / 2);
        const node = Node(value);
        const updatePointers = (curr, node) => {
          curr.prev.next = node;
          node.prev = curr.prev;
          node.next = curr;
          curr.prev = node;
        };
        if (index > mid) {
          let curr = tail;
          for (let i = size; i > index + 1; i--) {
            curr = curr.prev;
          }

          updatePointers(curr, node);
        } else {
          let curr = head;
          for (let i = 0; i < index; i++) {
            curr = curr.next;
          }
          updatePointers(curr, node);
        }
        size++;
      }
    },
    //reverse
    reversed: function () {
      let curr = head;
      let prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      head = prev;
    },

    //PRINT reverse
    reverse: function () {
      let curr = tail;
      let str = "";

      while (curr) {
        str += `${curr.value} `;
        curr = curr.prev;
      }
      console.log(str);
    },
    Print: function () {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let curr = head;
        let listValues = "";
        while (curr) {
          console.log("prev node", curr.value);

          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    },
  };
};
const list = DoublyLinkedList();
// console.log("list is empty?", list.isEmpty());
// console.log("list size", list.getSize());
// list.Print();

// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);
list.append(90);
list.append(100);
list.Print();
// console.log("list size", list.getSize());
// console.log("remove", list.removeFromFront());
// list.Print();
// list.removeFromEnd(50);
// list.Print();
// // list.reverse();
// list.insert(10, 3);
// list.Print();
list.insert(500, 8);
list.Print();

list.insert(500, 3);
list.Print();
list.reversed();
list.Print();
