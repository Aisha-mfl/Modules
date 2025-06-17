// // function createNode(val) {
// //   let value = val;
// //   let next = null;
// //   return { value, next };
// // }
// // function linkedList() {
// //   let head = null;
// //   let size = 0;

// //   return {
// //     isEmpty: function () {
// //       return size === 0;
// //     },
// //     getSize: function () {
// //       return size;
// //     },

// //     prepend: function (value) {
// //       const node = createNode(value);
// //       if (this.isEmpty()) {
// //         head = node;
// //       } else {
// //         node.next = head;
// //         head = node;
// //       }
// //       size++;
// //     },
// //     //constant big-0 o(1)

// //     Append: function (value) {
// //       const node = createNode(value);
// //       if (this.isEmpty()) {
// //         head = node;
// //       } else {
// //         let prev = head;
// //         while (prev.next) {
// //           prev = prev.next;
// //         }
// //         prev.next = node;
// //       }
// //       size++;
// //     },
// //     //o(n)

// //     insert: function (value, index) {
// //       if (index < 0 || index > size) {
// //         return;
// //       }
// //       if (index === 0) {
// //         this.prepend(value);
// //       } else {
// //         const node = createNode(value);
// //         let prev = head;
// //         for (let i = 0; i < index - 1; i++) {
// //           prev.prev.next;
// //         }
// //         node.next = prev.next;
// //         prev.next = node;
// //         size++;
// //       }
// //     },
// //     removal: function (index) {
// //       if (index < 0 || index >= size) {
// //         return null;
// //       }
// //       let removeNode;
// //       if (index === 0) {
// //         removeNode = head;
// //         head = head.next;
// //       } else {
// //         let prev = head;
// //         for (let i = 0; i < index - 1; i++) {
// //           prev = prev.next;
// //         }
// //         removeNode = prev.next;
// //         prev.next = removeNode.next;
// //       }

// //       size--;
// //       return removeNode.value;
// //     },
// //     //big-o o(1)
// //     //remove with value
// //     removeValue: function (value) {
// //       if (this.isEmpty()) {
// //         return null;
// //       }
// //       //value in head node
// //       if (head.value === value) {
// //         head = head.next;
// //         size--;
// //         return value;
// //       }
// //       //value in node after head
// //       else {
// //         let prev = head;
// //         while (prev.next && prev.next.value !== value) {
// //           prev = prev.next;
// //         }
// //         if (prev.next) {
// //           const removeNode = prev.next;
// //           prev.next = removeNode.next;
// //           size--;
// //           return value;
// //         }
// //         return null;
// //       }
// //     },
// //     //big-o o(n)

// //     //search in linked list
// //     search: function (value) {
// //       if (this.isEmpty()) {
// //         return -1;
// //       }
// //       let i = 0;
// //       let curr = head;
// //       while (curr) {
// //         if (curr.value === value) {
// //           return i;
// //         }
// //         curr = curr.next;
// //         i++;
// //       }
// //       return -1;
// //     },
// //     //reversed linked list
// //     reversed:function(value){
// //         let prev = null;
// //         let curr = head;
// //         while(curr)
// //         {
// //             let next = curr.next;
// //             curr.next = prev;
// //             prev = curr;
// //             curr = next;
// //         }
// //         head = prev;

// //     },
// //     print: function () {
// //       if (this.isEmpty()) {
// //         console.log("list is empty");
// //       } else {
// //         let curr = head;
// //         let listValues = "";
// //         while (curr) {
// //           listValues += `${curr.value} `;
// //           curr = curr.next;
// //         }
// //         console.log(listValues);
// //       }
// //     },
// //   };
// // }
// // const list = new linkedList();
// // console.log("list is empty?", list.isEmpty());
// // console.log("list size", list.getSize());
// // list.print();

// // list.insert(10, 0);
// // list.print();
// // list.insert(12, 1);
// // list.Append(20);
// // list.Append(30);
// // list.print();
// // console.log("list size", list.getSize());

// // // console.log(list.removal(10));

// // // list.print();
// // // console.log(list.removal(0));
// // // list.print();
// // // console.log(list.removal(1));
// // // list.print();
// // // console.log("list size", list.getSize());
// // // console.log(list.removeValue(12));
// // // list.print();
// // // console.log(list.removeValue(40));
// // // list.print();

// // console.log(list.search(60));
// // list.reversed();
// // list.print();

// function createNode(val) {
//   let value = val;
//   let next = null;
//   return { value, next };
// }
// export const linkedList = () => {
//   let head = null;
//   let size = 0;
//   let tail = null;

//   return {
//     isEmpty: function () {
//       return size === 0;
//     },
//     getSize: function () {
//       return size;
//     },
//     //all have constant time complexity o(1)
//     prepend: function (value) {
//       const node = createNode(value);
//       if (this.isEmpty()) {
//         head = node;
//         tail = node;
//       } else {
//         node.next = head;
//         head = node;
//       }
//       size++;
//     },
//     Append: function (value) {
//       const node = createNode(value);
//       if (this.isEmpty()) {
//         head = node;
//         tail = node;
//       } else {
//         //existing tail node to the new node
//         tail.next = node;
//         tail = node;
//       }
//       size++;
//     },
//     removeFromFront: function () {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = head.value;
//       if (size === 1) {
//         head = null;
//         tail = null;
//       }
//       head = head.next;
//       size--;
//       return value;
//     },
//     removeFromEnd: function () {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const value = tail.value;
//       if (size === 1) {
//         head = null;
//         tail = null;
//       } else {
//         let prev = head;
//         while (prev.next !== tail) {
//           prev = prev.next;
//         }
//         prev.next = null;
//         tail = head;
//         tail = prev;
//       }
//       size--;
//       return value;
//     },
//     peek: function () {
//       if (this.isEmpty()) {
//         console.log("Stack is empty");
//         return null;
//       }
//       return head.value;
//     },

//     print: function () {
//       if (this.isEmpty()) {
//         console.log("list is empty");
//       } else {
//         let curr = head;
//         let listValues = "";
//         while (curr) {
//           listValues += `${curr.value} `;
//           curr = curr.next;
//         }
//         console.log(listValues);
//       }
//     },
//   };
// };
// // module.exports = linkedList;

// // const list = new linkedList();
// // console.log("list is empty?", list.isEmpty());
// // console.log("list size", list.getSize());
// // list.print();

// // list.Append(10);
// // list.Append(20);
// // list.Append(30);
// // list.Append(40);
// // list.Append(50);
// // list.prepend(0);
// // list.print();
// // console.log("list size", list.getSize());
// // list.removeFromFront(0);
// // list.print();
// // list.removeFromEnd(50);
// // list.print();
// // console.log(list.peek());
// // function createNode(val) {
// //   let value = val;
// //   let next = null;
// //   return { value, next };
// // }
// // function mergeList(list1, list2) {

// //   const node = new  createNode();
// //   let prev = node;
// //   let curr1 = list1;
// //   let curr2 = list2;

// //   while (curr1.length && curr2.length) {
// //     if(curr1[0] <= curr2[0]){
// //       prev.next = curr1;
// //       prev = curr1;
// //       curr1 = curr1.next;
// //   }
// //   else{
// //     prev.next = curr2;
// //     prev = curr2;
// //     curr2 = curr2.next;
// //   }
// //   }
// //   if(curr1){
// //     prev.next = curr1;
// //   }
// //   if(curr2){
// //     prev.next = curr2;

// //   }
// //   return node.next;
// // }
// // console.log(mergeList([1,2,4], [1,3,4]));

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

// var mergeTwoLists = function(list1, list2) {
//   let curr1 = list1;
//   let curr2 = list2;
//   let prev = null;

//   if()

//   while(curr1.length && curr2.length){

//     }
//   }
// };

function createNode(val) {
  let value = val;
  let next = null;
  return { value, next };
}
function linkedList() {
  let head = null;
  let size = 0;

  return {
    isEmpty: function () {
      return size === 0;
    },
    getSize: function () {
      return size;
    },

    prepend: function (value) {
      const node = createNode(value);
      if (this.isEmpty()) {
        head = node;
      } else {
        node.next = head;
        head = node;
      }
      size++;
    },
    //constant big-0 o(1)

    Append: function (value) {
      const node = createNode(value);
      if (this.isEmpty()) {
        head = node;
      } else {
        let prev = head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      size++;
    },
    //o(n)

    insert: function (value, index) {
      if (index < 0 || index > size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = createNode(value);
        let prev = head;
        for (let i = 0; i < index - 1; i++) {
          prev.prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        size++;
      }
    },
    removal: function (index) {
      if (index < 0 || index >= size) {
        return null;
      }
      let removeNode;
      if (index === 0) {
        removeNode = head;
        head = head.next;
      } else {
        let prev = head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next;
      }

      size--;
      return removeNode.value;
    },
    //big-o o(1)
    //remove with value
    removeValue: function (value) {
      if (this.isEmpty()) {
        return null;
      }
      //value in head node
      if (head.value === value) {
        head = head.next;
        size--;
        return value;
      }
      //value in node after head
      else {
        let prev = head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          const removeNode = prev.next;
          prev.next = removeNode.next;
          size--;
          return value;
        }
        return null;
      }
    },
    //big-o o(n)

    //search in linked list
    search: function (value) {
      if (this.isEmpty()) {
        return -1;
      }
      let i = 0;
      let curr = head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    },
    //reversed linked list
    reversed: function (value) {
      let prev = null;
      let curr = head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      head = prev;
    },
    print: function () {
      if (this.isEmpty()) {
        console.log("list is empty");
      } else {
        let curr = head;
        let listValues = "";
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    },
    getHead: function () {
      return head;
    },
  };
}
// const list = new linkedList();


// list.Append(1);
// list.Append(2);
// list.Append(4);
// console.log(list.getHead());
// list.print();

// const list1 = new linkedList();

// list1.Append(1);
// list1.Append(3);
// list1.Append(4);
// console.log(list1.getHead());
// list1.print();

function mergeTwoLists(listA, listB) {
  const mergeList = linkedList();

  let listNode = listA.getHead();
  let listNode2 = listB.getHead();

  while (listNode && listNode2) {
    if (listNode.value <= listNode2.value) {
      mergeList.Append(listNode.value);
      listNode = listNode.next;
    } else {
      mergeList.Append(listNode2.value);
      listNode2 = listNode2.next;
    }
  }
  while (listNode) {
    mergeList.Append(listNode.value);
    listNode = listNode.next;
  }

  while (listNode2) {
    mergeList.Append(listNode2.value);
    listNode2 = listNode2.next;
  }
  return mergeList;
}

const list = new linkedList();

list.Append(1);
list.Append(2);
list.Append(4);
console.log(list.getHead());
list.print();

const list1 = new linkedList();

list1.Append(1);
list1.Append(3);
list1.Append(4);
console.log(list1.getHead());
const merge = mergeTwoLists(list , list1);
merge.print();
var mergeTwoLists = function(list1, list2) {
  const node = { val: -1, next: null };
  let tail = node;

while (list1 && list2) {
  if (list1.val <= list2.val) {
    tail.next = list1;
    list1 = list1.next;
  } else {
    tail.next = list2;
    list2 = list2.next;
  }
  tail = tail.next;
}

// Attach the rest of the remaining list
tail.next = list1 || list2;

return node .next;
};