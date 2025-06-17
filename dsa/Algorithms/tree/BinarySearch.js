function Node(val) {
  let value = val;
  let left = null;
  let right = null;
  return { value, left, right };
}
const binarySearchTree = () => {
  let root = null;
  return {
    isEmpty() {
      return root === null;
    },
    insert(value) {
      const node = Node(value);
      if (this.isEmpty()) {
        console.log(node);
        root = node;
      } else {
        this.insertNode(root, node);
      }
    },
    insertNode(root, node) {
      if (node.value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else {
          this.insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    },
    Search(root, value) {
      if (!root) {
        return false;
      } else {
        if (root.value === value) {
          return true;
        } else if (value < root.value) {
          return this.Search(root.left, value);
        } else {
          return this.Search(root.right, value);
        }
      }
    },
    //----------------------------------dfs----------------------------
    PreOrder(root) {
      if (root) {
        console.log(root.value);
        this.PreOrder(root.left);
        this.PreOrder(root.right);
      }
    },
    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
      }
    },
    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
      }
    },
    //-------------------------------------bfs-------------------------------
    LevelOrder() {
      const queue = [];
      queue.push(root);
      while (queue.length) {
        let curr = queue.shift();
        console.log(curr.value);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    },
    //----------------------------------min max value---------------------------
    min(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.min(root.left);
      }
    },
    max(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.max(root.right);
      }
    },
    //-------------------------------------------delete----------------------
    delete(value) {
      root = this.deleteNode(root, value);
    },
    deleteNode(root, value) {
      if (root === null) {
        return root;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        }
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    },
    printRoot() {
      return root;
    },
  };
};
const BsT = binarySearchTree();
console.log("tree is empty?", BsT.isEmpty());

BsT.insert(10);
BsT.insert(5);
BsT.insert(3);
BsT.insert(15);
console.log(BsT.printRoot());

// console.log(BsT.Search(BsT.printRoot(), 10));
// console.log(BsT.Search(BsT.printRoot(), 5));
// console.log(BsT.Search(BsT.printRoot(), 3));
// console.log(BsT.Search(BsT.printRoot(), 7));
// BsT.PreOrder(BsT.printRoot());
// BsT.inOrder(BsT.printRoot());
// BsT.postOrder(BsT.printRoot());
BsT.LevelOrder();
// console.log("min value", BsT.min(BsT.printRoot()));
// console.log("max value", BsT.max(BsT.printRoot()));
BsT.delete(10);
BsT.LevelOrder();
